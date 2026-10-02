/********************************************************************************
 * Copyright (C) 2023 CoCreate and Contributors.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 ********************************************************************************/

// Commercial Licensing Information:
// For commercial use of this software without the copyleft provisions of the AGPLv3,
// you must obtain a commercial license from CoCreate LLC.
// For details, visit <https://cocreate.app/licenses/> or contact us at sales@cocreate.app.

import { queryElements } from "@cocreate/utils";
import action from "@cocreate/actions";
import observer from "@cocreate/observer";
import "@cocreate/element-prototype";
import { getAttribute } from "@cocreate/element-prototype/src/getAttribute.js";

const CoCreateEvents = {
    elements: new Map(),

    // Known targets initialize for every prefix without an additional marker.
    // Arbitrary prefix.* properties and methods still opt in through
    // [prefix], [prefix-group], or [prefix-query].
    knownTargets: [
        "class",
        "src",
        "href",
        "value",
        "hidden",
        "disabled",
        "checked",
        "selected",
        "aria-expanded",
        "aria-hidden",
        "aria-pressed",
        "aria-current",
        "textContent",
        "innerHTML",
        "save"
    ],

    init: function (prefix, events) {
        if (prefix && events) {
            this.initPrefix(prefix, events);
        } else {
            const defaults = {
                "toggle": ["click"],
                "click": ["click"],
                "hover": ["mouseover", "mouseout"],
                "mouseover": ["mouseover"],
                "mouseout": ["mouseout"],
                "input": ["input"],
                "change": ["change"],
                "selected": ["click"],
                "onload": ["onload"],
                "observe": ["observer"],
                "intersection": ["intersection"],
                "resize": ["onload", "resize"],
                "localstorage": ["onload"],
                "focus": ["focus"],
                "blur": ["blur"],
                "error": ["error"]
            };

            for (const [p, e] of Object.entries(defaults)) {
                this.initPrefix(p, e);
            }
        }

        // Initialize from existing elements with [event-name]
        const customEventEls = document.querySelectorAll("[event-name]");
        const processedNames = new Set();

        for (const customEventEl of customEventEls) {
            let names = customEventEl.getAttribute("event-name");
            if (!names) continue;

            names.split(",").forEach(name => {
                name = name.trim();
                if (name && !processedNames.has(name)) {
                    processedNames.add(name);
                    this.initPrefix(name);
                }
            });
        }

        // Observe for new elements with [event-name]
        observer.init({
            name: "CoCreateEventName",
            types: ["addedNodes"],
            selector: `[event-name]`,
            callback: (mutation) => {
                const names = mutation.target.getAttribute("event-name");
                if (names) {
                    names.split(",").forEach(name => {
                        this.initPrefix(name.trim());
                    });
                }
            }
        });
    },

    initPrefix: function (prefix, events) {
        action.init({
            name: prefix,
            endEvent: `${prefix}End`,
            callback: (data) => {
                this.__updateElements(
                    data.element,
                    prefix,
                    null,
                    null,
                    data.params
                );
            }
        });

        // Updated selector to use dash for options: prefix-group, prefix-query
        const knownTargets = this.knownTargets.map(target => `[${prefix}\\.${target}]`);
        const selector = [
            `[${prefix}]`,
            `[${prefix}-group]`,
            `[${prefix}-query]`,
            `[${prefix}-element]`,
            ...knownTargets
        ].join(", ");

        observer.init({
            name: "CoCreateEventAttributes",
            types: ["attributes", "addedNodes"],
            selector,
            callback: (mutation) => {
                if (mutation.type === 'attributes') {
                    if (mutation.attributeName.startsWith(prefix)) {
                        this.initElements([mutation.target], prefix, events);
                    }
                } else {
                    this.initElements([mutation.target], prefix, events);
                }
            }
        });

        const elements = document.querySelectorAll(selector);
        this.initElements(elements, prefix, events);
    },

    initElements: function (elements, prefix, events = []) {
        for (const el of elements) {
            let isEventable = true;
            let elData = this.elements.get(el);

            if (!elData) {
                elData = { [prefix]: { events } };
                this.elements.set(el, elData);
            } else if (!elData[prefix]) {
                elData[prefix] = { events };
            } else {
                isEventable = false;
            }

            // Check for custom events defined on the element using dash
            let customEventsAttr = el.getAttribute(`${prefix}-events`);
            if (customEventsAttr) {
                // Remove listeners for previously assumed events before overriding
                events.forEach(event => el.removeEventListener(event, eventFunction));

                events = customEventsAttr.split(",").map(e => e.trim());
                elData[prefix].events = events;
                isEventable = true;
            }

            if (!events || !isEventable) continue;

            // --- Handle Special Events ---

            if (events.includes("onload")) {
                this.__updateElements(el, prefix);
            }

            if (events.includes("observer")) {
                this._initObserver(el, prefix);
            }

            if (events.includes("resize")) {
                this._initResizeObserver(el, prefix);
            }

            if (events.includes("intersection")) {
                this._initIntersectionObserver(el, prefix);
            }

            // --- Handle Standard Events ---

            for (const eventName of events) {
                if (["onload", "observer", "intersection", "resize"].includes(eventName)) {
                    continue;
                }

                // Remove existing listener to prevent duplicates
                el.removeEventListener(eventName, eventFunction);

                const options = {};
                // Updated to use dash for options
                const attributes = ["bubbles", "cancelable", "composed"];

                for (const attr of attributes) {
                    const attrValue = el.getAttribute(`${eventName}-${attr}`);
                    if (attrValue !== null) {
                        options[attr] = attrValue !== "false";
                    }
                }

                el.addEventListener(eventName, eventFunction, options);
            }
        }

        const self = this;
        function eventFunction(event) {
            const target = event.currentTarget;
            if (!target) return;

            const elData = self.elements.get(target);
            if (!elData || !elData[prefix]) return;

            const prefixData = elData[prefix];

            // Debounce/Prevent duplicate mouse events if needed
            if (prefixData.prev === event.type && ["mouseover", "mouseout"].includes(event.type)) {
                return;
            }
            prefixData.prev = event.type;

            // Check for 'actions' blocking
            const actionsAttr = target.getAttribute("actions") || "";
            if (actionsAttr.includes(prefix)) return;

            // Handle lifecycle controls (using dash)
            const lifecycleAttributes = [
                { attr: "prevent-default", method: "preventDefault" },
                { attr: "stop-propagation", method: "stopPropagation" },
                { attr: "stop-immediate-propagation", method: "stopImmediatePropagation" }
            ];

            for (const { attr, method } of lifecycleAttributes) {
                const attrValue = target.getAttribute(`${prefix}-${attr}`);
                if (attrValue !== null && attrValue !== "false") {
                    event[method]();
                }
            }

            self.__updateElements(target, prefix, prefixData.events);
        }
    },

    _initObserver: function (el, prefix) {
        // Updated to dash: prefix-selector, prefix-query, prefix-attribute-filter, prefix-types
        let selector = el.getAttribute(`${prefix}-selector`) || el.getAttribute(`${prefix}-query`) || "";
        let attributeFilter = (el.getAttribute(`${prefix}-attribute-filter`) || "")
            .split(/\s*,\s*/)
            .filter(item => item);

        let types = (el.getAttribute(`${prefix}-types`) || "")
            .split(/\s*,\s*/)
            .filter(item => item);

        const config = {
            types: types,
            callback: () => {
                this.__updateElements(el, prefix);
            }
        };

        if (selector) {
            if (!types.length && !attributeFilter.length) {
                config.types.push("addedNodes");
            }
            config.selector = selector;
        }

        if (attributeFilter.length) {
            config.types.push("attributes");
            config.attributeFilter = attributeFilter;
        }

        if (config.types.length) {
            observer.init(config);
        }
    },

    _initResizeObserver: function (el, prefix) {
        const resizeObserver = new ResizeObserver((entries) => {
            const lastEntry = entries[entries.length - 1];
            const { width } = lastEntry.contentRect;
            const widthValue = width + "px";
            el.width = widthValue;
            // Keeps dash style for conditional resize bindings.
            el.setAttribute(`${prefix}-if-value`, widthValue);
            this.__updateElements(el, prefix);
        });
        resizeObserver.observe(el);
    },

    _initIntersectionObserver: function (el, prefix) {
        // Updated to dash
        const rootSelector = el.getAttribute(`${prefix}-root`);
        const rootMargin = el.getAttribute(`${prefix}-root-margin`) || "0px";
        const thresholdRaw = el.getAttribute(`${prefix}-threshold`);
        const threshold = thresholdRaw ? JSON.parse(thresholdRaw) : [0];
        const trigger = el.getAttribute(`${prefix}-trigger`) || "both";

        const root = rootSelector ? document.querySelector(rootSelector) : null;
        const validThreshold = Array.isArray(threshold)
            ? threshold.filter(v => v >= 0 && v <= 1)
            : [0];

        const once = el.getAttribute(`${prefix}-once`);
        const isOnce = once !== null && once !== "false";

        const intersectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const isVisible = entry.isIntersecting;

                    if (
                        (trigger === "visible" && isVisible) ||
                        (trigger === "not-visible" && !isVisible) ||
                        trigger === "both"
                    ) {
                        el.setAttribute(`${prefix}-is-visible`, isVisible ? "true" : "false");
                        this.__updateElements(el, prefix);

                        if (isOnce) {
                            intersectionObserver.unobserve(entry.target);
                        }
                    }
                });
            },
            { root, rootMargin, threshold: validThreshold }
        );

        intersectionObserver.observe(el);
    },

    __updateElements: async function (rootElement, prefix, events, params) {
        if (!rootElement.isConnected) return;

        // 1. Determine targets based on prefix-group
        let sourceElements = [rootElement];
        const sourceGroup = rootElement.getAttribute(`${prefix}-group`);

        if (sourceGroup) {
            sourceElements = document.querySelectorAll(`[${prefix}-group="${sourceGroup}"]`);
        }

        // 2. Iterate through sourceElements
        for (const sourceElement of sourceElements) {

            // --- Global Options (Dash) ---

            // onEvent
            const onEvent = sourceElement.getAttribute(`${prefix}-on`);
            if (onEvent) {
                await new Promise((resolve) => {
                    const handleEvent = () => {
                        document.removeEventListener(onEvent, handleEvent);
                        resolve();
                    };
                    document.addEventListener(onEvent, handleEvent);
                });
            }

            // setInterval
            const intervalAttr = sourceElement.getAttribute(`${prefix}-set-interval`);
            if (intervalAttr !== null) {
                const intervalMs = parseInt(intervalAttr, 10) || 0;

                if (!sourceElement.eventsInterval) {
                    sourceElement.eventsInterval = {};
                }

                const currentInterval = sourceElement.eventsInterval[prefix];

                if (intervalMs > 0) {
                    // Start or update interval
                    if (!currentInterval || currentInterval.delay !== intervalMs) {
                        if (currentInterval) clearInterval(currentInterval.id);

                        sourceElement.eventsInterval[prefix] = {
                            delay: intervalMs,
                            id: setInterval(() => {
                                if (!sourceElement.isConnected) {
                                    const entry = sourceElement.eventsInterval?.[prefix];
                                    if (entry) {
                                        clearInterval(entry.id);
                                        delete sourceElement.eventsInterval[prefix];
                                    }
                                    return;
                                }
                                // Recursive call
                                this.__updateElements(rootElement, prefix, events, params);
                            }, intervalMs)
                        };
                    }
                } else if (currentInterval) {
                    // Clear interval if set to 0
                    clearInterval(currentInterval.id);
                    delete sourceElement.eventsInterval[prefix];
                }
            }

            // setTimeout
            const delayAttr = sourceElement.getAttribute(`${prefix}-set-timeout`);
            if (delayAttr) {
                const delayTime = parseInt(delayAttr, 10) || 0;
                if (delayTime > 0) {
                    await new Promise(resolve => setTimeout(resolve, delayTime));
                }
            }

            if (!sourceElement.isConnected) return;

            // once
            const onceAttr = sourceElement.getAttribute(`${prefix}-once`);
            if (onceAttr !== null) {
                if (!sourceElement.eventsOnce) {
                    sourceElement.eventsOnce = [prefix];
                } else if (sourceElement.eventsOnce.includes(prefix)) {
                    continue; // Skip if already ran
                } else {
                    sourceElement.eventsOnce.push(prefix);
                }
            }

            // --- Resolve Targets ---
            // const querySelector = sourceElement.getAttribute(`${prefix}-query`);
            const querySelector =
                sourceElement.attributes[`${prefix}-query`]?.value;
            let targetElements = [sourceElement];

            if (querySelector || params) {
                targetElements = queryElements({
                    element: sourceElement,
                    prefix: prefix,
                    selector: querySelector || params
                });
            }

            // --- Execute Action on Targets ---
            for (const targetElement of targetElements) {
                await this.setValue(
                    rootElement,
                    sourceElement,
                    targetElement,
                    prefix,
                    events
                );
            }
        }

        rootElement.dispatchEvent(
            new CustomEvent(`${prefix}End`, { detail: {} })
        );
    },

    setValue: async function (rootElement, sourceElement, targetElement, prefix, events) {
        // Handle Mouseout toggle logic
        if (events && events.includes("mouseout")) {
            if (targetElement.matches(":hover")) {
                targetElement.addEventListener(
                    "mouseout",
                    () => {
                        this.setValue(rootElement, sourceElement, targetElement, prefix, events);
                    },
                    { once: true }
                );
                return;
            }
        }

        const deactivate = (rootElement !== sourceElement);

        // Iterate Attributes
        for (const attribute of sourceElement.attributes) {
            const name = attribute.name;

            // Optimization: Skip if shorter than prefix + dot + min char
            if (name.length <= prefix.length + 1) continue;

            // STRICT RULE: Only process attributes with DOT separator.
            // All options use Dash, so they will be ignored here.
            if (!name.startsWith(prefix) || name[prefix.length] !== '.') continue;

            // Extract target name (e.g., 'value', 'style', 'src', 'data-something')
            let targetName = name.substring(prefix.length + 1);
            const explicitMethod = targetName.startsWith("$");

            let values = [];
            let value = attribute.value;
            if (value.startsWith("(") && value.endsWith(")")) {
                let depth = 0;
                let start = 0;
                for (let i = 0; i < value.length; i++) {
                    const char = value.charCodeAt(i);
                    if (char === 40) {
                        depth++;
                    } else if (char === 41) {
                        depth--;
                    } else if (char === 44 && depth === 0) {
                        values.push(value.slice(start, i).trim().slice(1, -1));
                        start = i + 1;
                    }
                }
                values.push(value.slice(start).trim().slice(1, -1));
            } else {
                value = sourceElement.getAttribute(name);
                // Parse CSV for rotation
                if (typeof value === 'string') {
                    values = value.split(',').map(v => v.trim());
                } else if (Array.isArray(value)) {
                    values = value;
                } else {
                    values = [value];
                }
            }
            // getAttribute has AST built in and resolves a wide range of operators.

            let oldValue = "";
            let newValue = "";

            switch (targetName) {
                case 'type':
                    oldValue = targetElement.getAttribute('type') || '';
                    newValue = this.__getNextValue(values, oldValue, deactivate);
                    targetElement.setAttribute('type', newValue);
                    break;

                case 'style':
                    if (targetElement.getAttribute("style")) {
                        // Normalize style string for comparison
                        const styles = targetElement.getAttribute("style")
                            .split(";")
                            .map(x => x.trim().replace(/\s/g, ""));

                        oldValue = values.find(x => styles.includes(x.replace(/\s/g, ""))) || "";
                    }
                    newValue = this.__getNextValue(values, oldValue, deactivate);

                    if (oldValue) {
                        const [prop] = oldValue.split(":");
                        if (prop) targetElement.style[prop.trim()] = "";
                    }

                    if (newValue) {
                        const styles = newValue.split(";");
                        for (const s of styles) {
                            const [prop, val] = s.split(":");
                            if (prop && val) targetElement.style[prop.trim()] = val.trim();
                        }
                    }
                    break;

                case 'class':
                    const currentClasses = Array.from(targetElement.classList);
                    oldValue = values.find(val => {
                        const requiredClasses = val.split(" ");
                        return requiredClasses.every(c => currentClasses.includes(c));
                    }) || "";

                    newValue = this.__getNextValue(values, oldValue, deactivate);

                    if (oldValue) {
                        oldValue.split(" ").forEach(c => targetElement.classList.remove(c));
                        if (values.length === 1 && !newValue) return;
                    }

                    if (newValue) {
                        newValue.split(" ").forEach(c => targetElement.classList.add(c));
                    }
                    break;

                case 'insertadjacenthtml':
                case 'insertadjacenttext':
                case 'insertAdjacentHTML':
                case 'insertAdjacentText':
                    const position = sourceElement.getAttribute(name);;
                    if (!position) continue;

                    let content = "";
                    if (sourceElement.getValue) {
                        content = await sourceElement.getValue();
                    }

                    // Check for CoCreate Rich Text integration
                    let domTextEditor = targetElement.parentElement?.closest("[contenteditable]");

                    if (domTextEditor && typeof CoCreate !== 'undefined' && CoCreate.text) {
                        CoCreate.text.insertAdjacentElement({
                            domTextEditor,
                            position,
                            target: targetElement,
                            elementValue: content
                        });
                    } else {
                        const isHtml = targetName.toLowerCase().includes('html');
                        if (isHtml) {
                            targetElement.insertAdjacentHTML(position, content);
                        } else {
                            targetElement.insertAdjacentText(position, content);
                        }
                    }
                    break;

                case 'insertadjacentelement':
                case 'insertAdjacentElement':
                    const elementPosition = sourceElement.getAttribute(name);
                    const elementSelector =
                        sourceElement.attributes.getNamedItem(`${prefix}-element`)?.value;
                    if (!elementPosition || !elementSelector) continue;

                    const elementsToInsert = queryElements({
                        element: sourceElement,
                        prefix,
                        selector: elementSelector
                    });
                    const elementToInsert = elementsToInsert[0];
                    if (
                        elementToInsert &&
                        typeof targetElement.insertAdjacentElement === 'function'
                    ) {
                        targetElement.insertAdjacentElement(
                            elementPosition,
                            elementToInsert
                        );
                    }
                    break;

                case 'value':
                    if (targetElement.getValue) {
                        oldValue = await targetElement.getValue();
                    } else {
                        oldValue = targetElement.value || "";
                    }

                    if (!values.includes(oldValue)) oldValue = "";
                    newValue = this.__getNextValue(values, oldValue, deactivate);

                    if (targetElement.setValue) {
                        targetElement.setValue(newValue);
                    } else {
                        targetElement.value = newValue;
                    }
                    break;

                default:
                    // Generic handling: Try Property first, then Attribute

                    // 1. Try Property
                    if (targetElement[targetName] !== undefined || explicitMethod) {
                        if (explicitMethod)
                            targetName = targetName.substring(1)
                        oldValue = targetElement[targetName];
                        if (!values.includes(oldValue) && typeof oldValue !== 'function') oldValue = "";

                        newValue = this.__getNextValue(values, oldValue, deactivate);

                        if (typeof targetElement[targetName] === 'function') {
                            // A non-$ method binding with value=false disables
                            // the action. Explicit $method bindings may still
                            // intentionally pass false as an argument.
                            if (
                                explicitMethod ||
                                (newValue !== false && newValue !== "false")
                            ) {
                                targetElement[targetName](newValue);
                            }
                        } else {
                            targetElement[targetName] = newValue;
                        }
                    }
                    // 2. Fallback to Attribute
                    else {
                        oldValue = targetElement.getAttribute(targetName);
                        if (!values.includes(oldValue)) oldValue = "";

                        newValue = this.__getNextValue(values, oldValue, deactivate);

                        // Handle Namespaced Attributes (e.g. svg:href) if encoded in name
                        targetElement.setAttribute(targetName, newValue);
                    }
                    break;
            }
        }
    },

    __getNextValue: function (values, val, deactivate) {
        if (deactivate) return "";
        const size = values.length;
        const nn = values.indexOf(val);
        if (nn === -1) {
            return values[0];
        } else {
            return values[(nn + 1) % size];
        }
    }
};

CoCreateEvents.init();

export default CoCreateEvents;
