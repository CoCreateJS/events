const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");

const code = fs.readFileSync(path.join(__dirname, "../src/index.js"), "utf8")
    .replace(/^import .*;\r?\n/gm, "")
    .replace("CoCreateEvents.init();", "")
    .replace("export default CoCreateEvents;", "globalThis.CoCreateEvents = CoCreateEvents;");

const context = {
    action: {},
    observer: {},
    queryElements: () => [],
    getAttribute: () => undefined
};
const resolverCode = fs.readFileSync(
    path.join(path.dirname(require.resolve("@cocreate/utils")), "modules/resolveProperty.js"), "utf8"
).replace("export function resolveProperty", "function resolveProperty");
vm.runInNewContext(resolverCode + "\n" + code, context);

function bindingSource(name, value) {
    return { attributes: [{ name, value }], getAttribute: () => value };
}

test("lowercased bindings resolve inherited methods and preserve their receiver", async () => {
    class Target {
        customMethod(value) { this.received = value; }
    }
    for (const name of ["click.$custommethod", "click.custommethod"]) {
        const source = bindingSource(name, "argument");
        const target = new Target();
        await context.CoCreateEvents.setValue(source, source, target, "click");
        assert.equal(target.received, "argument");
        assert.equal(Object.hasOwn(target, "custommethod"), false);
    }
});

test("lowercased bindings write mixed-case properties, including undefined properties", async () => {
    for (const initial of ["", undefined]) {
        const source = bindingSource("input.textcontent", "updated");
        const target = { textContent: initial };
        await context.CoCreateEvents.setValue(source, source, target, "input");
        assert.equal(target.textContent, "updated");
        assert.equal(Object.hasOwn(target, "textcontent"), false);
    }
});

test("unmatched ordinary bindings retain attribute fallback", async () => {
    const source = bindingSource("click.data-state", "active");
    let received;
    const target = {
        getAttribute: () => null,
        setAttribute(name, value) { received = { name, value }; }
    };
    await context.CoCreateEvents.setValue(source, source, target, "click");
    assert.deepEqual(received, { name: "data-state", value: "active" });
});

test("ambiguous bindings reject", async () => {
    for (const name of ["click.custommethod", "click.$custommethod"]) {
        const source = bindingSource(name, "argument");
        await assert.rejects(context.CoCreateEvents.setValue(source, source, {
            customMethod() {}, custommethod() {}
        }, "click"), /Ambiguous property/);
    }
});

test("$ bindings assign new and existing properties without falling back to attributes", async () => {
    const source = bindingSource("click.$customproperty", "updated");
    for (const initial of [{}, { customProperty: "old" }, { customProperty: undefined }]) {
        const target = Object.assign(initial, {
            getAttribute() { assert.fail("Must not read an attribute"); },
            setAttribute() { assert.fail("Must not write an attribute"); }
        });
        const key = Object.hasOwn(target, "customProperty") ? "customProperty" : "customproperty";
        await context.CoCreateEvents.setValue(source, source, target, "click");
        assert.equal(target[key], "updated");
        assert.equal(Object.hasOwn(target, "$customproperty"), false);
    }
});

test("$ bindings can assign a function value to a new property without invoking it", async () => {
    const callback = () => assert.fail("Assigned function must not execute");
    const source = bindingSource("click.$callback", callback);
    const target = {};
    await context.CoCreateEvents.setValue(source, source, target, "click");
    assert.equal(target.callback, callback);
});

test("$undefined is passed to a method as undefined", async () => {
    let args;
    const source = {
        attributes: [{ name: "focus.$focus", value: "$undefined" }],
        getAttribute: () => undefined
    };
    const target = {
        focus(...received) {
            args = received;
        }
    };

    await context.CoCreateEvents.setValue(source, source, target, "focus");
    assert.deepEqual(args, [undefined]);
});

test("an explicit method attribute preserves a provided argument", async () => {
    let args;
    const source = {
        attributes: [{ name: "click.$method", value: "value" }],
        getAttribute: () => "value"
    };
    const target = {
        method(...received) {
            args = received;
        }
    };

    await context.CoCreateEvents.setValue(source, source, target, "click");
    assert.deepEqual(args, ["value"]);
});

test("insertAdjacentElement moves the queried element without reading its value", async () => {
    const movedElement = { id: "preview" };
    let query;
    let inserted;
    const attributes = [
        { name: "click.insertAdjacentElement", value: "beforeend" },
        { name: "click-element", value: "$document #preview" }
    ];
    attributes.getNamedItem = name => attributes.find(attribute => attribute.name === name);
    context.queryElements = options => {
        query = options;
        return [movedElement];
    };
    const source = {
        attributes,
        getAttribute(name) {
            if (name === "click.insertAdjacentElement") return "beforeend";
            if (name === "click-element") return "$document #preview";
            return null;
        },
        getValue() {
            throw new Error("insertAdjacentElement must use the element itself");
        }
    };
    const target = {
        insertAdjacentElement(position, element) {
            inserted = { position, element };
        }
    };

    await context.CoCreateEvents.setValue(source, source, target, "click");

    assert.equal(query.prefix, "click");
    assert.equal(query.selector, "$document #preview");
    assert.deepEqual(inserted, { position: "beforeend", element: movedElement });
});

test("an empty method attribute preserves an empty-string argument", async () => {
    let args;
    const source = {
        attributes: [{ name: "click.$method", value: "" }],
        getAttribute: () => ""
    };
    const target = {
        method(...received) {
            args = received;
        }
    };

    await context.CoCreateEvents.setValue(source, source, target, "click");
    assert.deepEqual(args, [""]);
});

test("a false-valued implicit method binding does not invoke the method", async () => {
    let calls = 0;
    const source = {
        attributes: [{ name: "input.save", value: "false" }],
        getAttribute: () => false
    };
    const target = {
        save() {
            calls++;
        }
    };

    await context.CoCreateEvents.setValue(source, source, target, "input");
    assert.equal(calls, 0);
});

test("an explicit $method binding can pass false intentionally", async () => {
    let args;
    const source = {
        attributes: [{ name: "input.$method", value: "false" }],
        getAttribute: () => false
    };
    const target = {
        method(...received) {
            args = received;
        }
    };

    await context.CoCreateEvents.setValue(source, source, target, "input");
    assert.deepEqual(args, [false]);
});

function insertionSource(action, options = {}) {
    const entries = { [`input.${action}`]: "beforeend", ...options };
    const attributes = Object.entries(entries).map(([name, value]) => ({ name, value }));
    attributes.getNamedItem = name => attributes.find(attribute => attribute.name === name);
    return {
        attributes,
        hasAttribute: name => Object.hasOwn(entries, name),
        getAttribute: name => entries[name] ?? null,
        getValue: () => "event source"
    };
}

test("HTML and text insertion prefer explicit input-value, including empty values", async () => {
    for (const action of ["insertAdjacentHTML", "insertAdjacentText"]) {
        for (const value of ["<span>Explicit content</span>", "", false, 0]) {
            const source = insertionSource(action, { "input-value": value, "input-element": "#other" });
            source.getValue = () => { throw new Error("Should not read the event source"); };
            context.queryElements = () => { throw new Error("Explicit value should take precedence"); };
            let received;
            const target = { [action](position, content) { received = { position, content }; } };
            await context.CoCreateEvents.setValue(source, source, target, "input");
            assert.deepEqual(received, { position: "beforeend", content: value });
        }
    }
});

test("input-element supplies getValue content while the source element stays in place", async () => {
    const source = insertionSource("insertAdjacentHTML", { "input-element": "$parent $next" });
    const contentSource = { getValue: () => "<span>Copied chip</span>" };
    context.queryElements = ({ element, selector }) => {
        assert.equal(element, source);
        assert.equal(selector, "$parent $next");
        return [contentSource];
    };
    let content;
    await context.CoCreateEvents.setValue(source, source, {
        insertAdjacentHTML(position, value) { content = value; }
    }, "input");
    assert.equal(content, "<span>Copied chip</span>");
});

test("a missing input-element does not fall back to unrelated event-source content", async () => {
    const source = insertionSource("insertAdjacentHTML", { "input-element": "#missing" });
    context.queryElements = () => [];
    let calls = 0;
    await context.CoCreateEvents.setValue(source, source, {
        insertAdjacentHTML() { calls++; }
    }, "input");
    assert.equal(calls, 0);
});

test("insertion retains the event-source fallback and awaits asynchronous content", async () => {
    for (const explicit of [false, true]) {
        const source = insertionSource("insertAdjacentHTML", explicit
            ? { "input-value": Promise.resolve("asynchronous content") }
            : {});
        let content;
        await context.CoCreateEvents.setValue(source, source, {
            insertAdjacentHTML(position, value) { content = value; }
        }, "input");
        assert.equal(content, explicit ? "asynchronous content" : "event source");
    }
});

test("a changed checkbox state propagates after a previous input event", () => {
    const listeners = new Map();
    const attributes = [];
    attributes.getNamedItem = () => null;
    const source = {
        type: "checkbox",
        checked: true,
        attributes,
        getAttribute: () => null,
        addEventListener: (name, listener) => listeners.set(name, listener),
        removeEventListener() {}
    };
    const events = context.CoCreateEvents;
    const originalUpdate = events.__updateElements;
    const states = [];
    events.__updateElements = element => states.push(element.checked);
    try {
        events.initElements([source], "input", ["input"]);
        const input = listeners.get("input");
        input({ currentTarget: source, type: "input", detail: { skip: false } });
        source.checked = false;
        input({ currentTarget: source, type: "input", detail: { skip: true } });
        input({ currentTarget: source, type: "input", detail: { skip: true } });
        assert.deepEqual(states, [true, false]);
    } finally {
        events.__updateElements = originalUpdate;
    }
});
