# @cocreate/events

A declarative, event-driven DOM engine configured entirely through HTML5 attributes. Bind any DOM event, observer, or custom event to one or many target elements, then assign values to their properties, attributes, styles, classes, or markup without writing JavaScript. Every binding follows a single, predictable grammar: an **event prefix** declares when to run, **dash options** declare how and where to run, and **dot assignments** declare what to change.

---

## Documentation

For a complete guide, live playground, and working demos refer to the [documentation](https://cocreate.app/docs/events).

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [How it Works](#how-it-works)
* [Anatomy of a Binding](#anatomy-of-a-binding)
* [Event Prefixes](#event-prefixes)
* [Assignment Targets](#assignment-targets)
* [Value Semantics](#value-semantics)
* [Targeting Elements](#targeting-elements)
* [Options Reference](#options-reference)
* [Observers](#observers)
* [Groups](#groups)
* [Custom Events](#custom-events)
* [Actions Integration](#actions-integration)
* [Behavior Notes](#behavior-notes)
* [Announcements](#announcements)
* [Roadmap](#roadmap)
* [How to Contribute](#how-to-contribute)
* [About](#about)
* [License](#license)

---

## Features

* **Attribute-Driven Bindings:** Wire clicks, hovers, inputs, focus, mutations, resizes, and intersections without writing JavaScript.
* **Universal Assignment:** Set any DOM property, HTML attribute, style declaration, class, or adjacent markup on a target element.
* **Multi-Target Dispatch:** A single event can update many elements resolved through relational selectors such as `$parent`, `$next`, `$closest`, and `$document`.
* **Value Rotation:** Comma separated values cycle on each trigger, producing toggles, tri-states, and round-robin behavior from a single attribute.
* **Grouped Selection:** `-group` links elements so that activating one deactivates its peers, giving tabs, accordions, and radio behavior for free.
* **Observer Support:** Mutation, intersection, and resize observers are declared with the same grammar as ordinary DOM events.
* **Custom Events:** Register application-specific event names and drive them from markup or from the Actions pipeline.
* **Timing Controls:** Debounce, delay, repeat, gate, and one-shot behavior via `-set-timeout`, `-set-interval`, `-on`, and `-once`.
* **Actions Integration:** Every prefix is registered as an action, so bindings can be chained and sequenced with other CoCreate modules.

---

## Installation

```bash
npm install @cocreate/events
```

```bash
yarn add @cocreate/events
```

### CDN

```html
<script src="https://cdn.cocreate.app/events/latest/CoCreate-events.min.js"></script>
```

---

## Usage

### Toggle an Attribute

```html
<button toggle-query="#panel" toggle.hidden="true,false">Toggle panel</button>

<div id="panel">Panel content</div>
```

### Set a Property on Click

```html
<button click-query="$next" click.readonly="">Enable editing</button>
<textarea readonly></textarea>
```

### Copy a Value Between Elements

```html
<input input-query="$document #preview" input.value="$value" />
<span id="preview"></span>
```

### Apply Styles and Classes

```html
<button
	click-query="#card"
	click.style="background:tomato,background:seagreen"
	click.class="is-active"></button>
```

### Reveal on Hover

```html
<div hover-query=".tools" hover.hidden="">
	<div class="tools" hidden>Tools</div>
</div>
```

### Insert Markup

```html
<textarea click-query="#output" click.insertAdjacentHTML="beforeend"></textarea>
```

The inserted content is read from the source element's value.

---

## How it Works

1. On load the module registers a set of built-in event prefixes and scans the document for matching elements.
2. An element is initialized when it declares the bare prefix, a `-query`, or a `-group` attribute.
3. Listeners are attached for the DOM events mapped to that prefix, or for the events named in `-events`.
4. When the event fires, source elements are resolved: the element itself, or every member of its `-group`.
5. Timing options such as `-on`, `-set-timeout`, `-set-interval`, and `-once` are evaluated.
6. Target elements are resolved from `-query` using relational selectors.
7. Every `prefix.target` assignment on the source element is applied to each target element.
8. A `prefixEnd` event is dispatched on the element so that action chains can continue.
9. A `MutationObserver` initializes elements added to the DOM later, so dynamically rendered markup is bound automatically.

---

## Anatomy of a Binding

Every binding is composed of three parts. The separator character determines the role of the attribute.

```html
<button
	click-query="$document #chat-body"
	click-once
	click.scroll-to="bottom"></button>
```

| Part | Separator | Purpose | Example |
| ---- | --------- | ------- | ------- |
| Prefix | none | Declares the event that triggers the binding | `click` |
| Option | dash `-` | Configures how and where the binding runs | `click-query`, `click-once` |
| Assignment | dot `.` | Declares what is written to the target | `click.value`, `click.hidden` |

> Dash attributes are always configuration. Dot attributes are always assignments. Any attribute using a dash is ignored by the assignment engine, and vice versa.

---

## Event Prefixes

Each prefix listens to one or more native DOM events.

| Prefix | DOM Events | Typical Use |
| ------ | ---------- | ----------- |
| `click` | `click` | Buttons, links, menu items |
| `toggle` | `click` | Show/hide, on/off, rotating states |
| `selected` | `click` | Tabs and selection lists, usually with `-group` |
| `hover` | `mouseover`, `mouseout` | Reveal on hover, auto-reverting |
| `mouseover` | `mouseover` | Enter-only behavior |
| `mouseout` | `mouseout` | Leave-only behavior |
| `input` | `input` | Live binding as the user types |
| `change` | `change` | Commit on change, selects and checkboxes |
| `focus` | `focus` | Focus styling and hints |
| `blur` | `blur` | Validation and cleanup |
| `onload` | runs immediately | Initialization on parse or insertion |
| `observe` | `MutationObserver` | React to DOM changes |
| `intersection` | `IntersectionObserver` | Scroll reveals, lazy loading |
| `resize` | `ResizeObserver`, load | Responsive behavior |
| `localstorage` | runs immediately | Hydrate from stored state |

Override the events for any prefix with `-events`:

```html
<div click-events="dblclick, keyup" click-query="#panel" click.hidden=""></div>
```

---

## Assignment Targets

The name after the dot determines what is written.

| Assignment | Behavior |
| ---------- | -------- |
| `prefix.value` | Uses `setValue()` when available so bound modules receive an `input` event, otherwise sets `.value` |
| `prefix.style` | Applies `property:value` declarations, removing the previous declaration when rotating |
| `prefix.class` | Adds and removes class names, supporting multiple classes per value |
| `prefix.insertAdjacentHTML` | Inserts the source value at the given position, integrating with CoCreate rich text when inside `[contenteditable]` |
| `prefix.insertAdjacentText` | Same as above, as plain text |
| `prefix.<property>` | Any existing DOM property, for example `hidden`, `readonly`, `disabled`, `checked`, `textContent` |
| `prefix.$<method>` | Invokes a DOM method with the resolved value; use `focus.$focus="$undefined"` for an optional argument |
| `prefix.<attribute>` | Any attribute when no matching property exists, for example `click.data-state` or `click.aria-expanded` |

Valid positions for the insert assignments are `beforebegin`, `afterbegin`, `beforeend`, and `afterend`.

```html
<button click-query="#box" click.aria-expanded="true,false">Expand</button>
```

---

## Value Semantics

### Static values

```html
<button click-query="#status" click.textContent="Saved">Save</button>
```

### Dynamic values

`$value` resolves to the source element's current value at trigger time.

```html
<select change-query="#preview" change.textContent="$value">
	<option>One</option>
	<option>Two</option>
</select>
```

### Rotation

Comma separated values rotate on each trigger. The engine reads the target's current value, finds its position in the list, and applies the next entry, wrapping at the end.

```html
<button click-query="#panel" click.data-state="open,half,closed"></button>
```

Sequence: `open` → `half` → `closed` → `open`.

---

## Targeting Elements

`-query` accepts standard CSS selectors, comma separated selector lists, and relational operators. When omitted, the source element is its own target.

| Operator | Resolves To |
| -------- | ----------- |
| `$document` | The owning document |
| `$parent` | The parent element |
| `$next` | The next element sibling |
| `$previous` | The previous element sibling |
| `$closest <selector>` | Nearest matching ancestor |
| `$frame` | The frame element of the current document |
| `$top` | The top-level document |

Operators compose with ordinary selectors, and a trailing `[]` selects **all** matches instead of the first.

```html
<span click-query="$closest .card .title[]" click.contentEditable="true"></span>
```

Selectors also support media suffixes, so a binding can be limited to a viewport range:

```html
<div click-query="#menu@xs@sm" click.hidden=""></div>
```

Available ranges are `xs`, `sm`, `md`, `lg`, and `xl`.

---

## Options Reference

| Option | Description |
| ------ | ----------- |
| `prefix-query` | Selector resolving the target elements |
| `prefix-element` | Selector resolving the element to move, or the value source for HTML/text insertion |
| `prefix-value` | Evaluated content for HTML/text insertion; takes precedence over `prefix-element` |
| `prefix-selector` | Selector observed by `observe`, keeping `-query` free for targets |
| `prefix-group` | Links elements so activating one deactivates its peers |
| `prefix-events` | Comma separated DOM events replacing the prefix defaults |
| `prefix-once` | Runs the binding a single time |
| `prefix-set-timeout` | Delay in milliseconds before running |
| `prefix-set-interval` | Repeat interval in milliseconds, `0` clears it |
| `prefix-on` | Waits for the named document event before running |
| `prefix-prevent-default` | Calls `preventDefault()` |
| `prefix-stop-propagation` | Calls `stopPropagation()` |
| `prefix-stop-immediate-propagation` | Calls `stopImmediatePropagation()` |
| `prefix-types` | Mutation types observed by `observe` |
| `prefix-attribute-filter` | Attribute names observed by `observe` |
| `prefix-root` | Root element selector for `intersection` |
| `prefix-root-margin` | Root margin for `intersection` |
| `prefix-threshold` | JSON array of thresholds for `intersection` |
| `prefix-trigger` | `visible`, `not-visible`, or `both` for `intersection` |
| `<event>-bubbles` | Listener option, named after the DOM event |
| `<event>-cancelable` | Listener option, named after the DOM event |
| `<event>-composed` | Listener option, named after the DOM event |

The module also writes status attributes you can bind against: `prefix-is-visible` during intersection changes and `prefix-if-value` carrying the observed width during resizes.

HTML/text insertion reads `prefix-value` when present (including an empty string), otherwise the first `prefix-element` match's `getValue()`, otherwise the event source's `getValue()`. A missing explicit source inserts nothing. These options do not change the separate `prefix.value` action.

```html
<input
    type="checkbox"
    input-query="$this:checked $closest form #selected-skills"
    input-value="$query($this:checked $parent $next).getValue()"
    input.insertAdjacentHTML="beforeend" />
```

`prefix.insertAdjacentElement` moves the first element matched by `prefix-element` to the requested position on the `prefix-query` target. Unlike the HTML/text variants, it passes the element itself rather than reading its value:

```html
<button
	click-query="$document #preview-container"
	click.insertAdjacentElement="beforeend"
	click-element="$document #preview">
	Show preview
</button>
```

---

## Observers

### Mutation

Use `-selector` for what to watch and `-query` for what to update.

```html
<div
	observe-selector=".message"
	observe.scroll-to="bottom"></div>
```

Watch attributes instead of insertions:

```html
<div
	observe-selector="#editor"
	observe-attribute-filter="data-state"
	observe-query="#indicator"
	observe.textContent="changed"></div>
```

### Intersection

```html
<img
	intersection
	intersection-threshold="[0.25]"
	intersection-trigger="visible"
	intersection-once
	intersection.class="fade-in" />
```

### Resize

```html
<div resize resize-query="$parent" resize.data-width="$width"></div>
```

The observed width, including its `px` unit, is available as `$width` and can
be embedded in assignments:

```html
<aside
    resize
    resize-query="#page-topbar, .main-content"
    resize.style="margin-right:$width"></aside>
```

---

## Groups

Elements sharing a `-group` value act as a single unit. When one is triggered it applies its assignments, while every other member is deactivated and has its assignments cleared. This produces tab bars, accordions, and radio groups without JavaScript.

```html
<nav>
	<button selected-group="tabs" selected-query="#tab-1" selected.hidden="false" class="tab">One</button>
	<button selected-group="tabs" selected-query="#tab-2" selected.hidden="false" class="tab">Two</button>
</nav>

<section id="tab-1">First</section>
<section id="tab-2" hidden>Second</section>
```

---

## Custom Events

Declare an application specific prefix with `event-name`. Multiple names are comma separated, and the prefix becomes available to markup and to the Actions pipeline.

```html
<div event-name="publish, archive"></div>

<button publish-query="#doc" publish.data-status="published">Publish</button>
```

Dispatch it from JavaScript or from an action chain:

```javascript
import events from "@cocreate/events";

events.init("publish", ["click"]);
```

---

## Actions Integration

Every prefix is registered with `@cocreate/actions`, so bindings participate in sequenced action chains and can be invoked by name.

```html
<button actions="save, click">Save and continue</button>
```

When an element's `actions` attribute already includes the prefix, the direct DOM listener stands down and the action chain drives the binding, preventing duplicate execution.

Each run dispatches a `prefixEnd` event on the element, which is how the action pipeline knows the binding has completed and the next action may start.

Actions may also pass a selector as a parameter, which is used when the element has no `-query`:

```html
<button actions="click(#panel)"></button>
```

---

## Behavior Notes

* An element is only initialized if it declares the bare prefix, `-query`, or `-group`. An element carrying assignments alone is not bound.
* Rotation compares the target's current value as a string. Boolean DOM properties such as `hidden` and `readonly` report real booleans, so prefer explicit two-value rotations or attribute assignments when precise toggling matters.
* `hover` defers its revert until the pointer actually leaves the target, so bindings do not flicker while the cursor remains over the element.
* Assignments are applied in attribute order, allowing a single event to compose several changes on the same target.
* Dynamically inserted markup is initialized automatically, so templates and rendered lists behave the same as static markup.

---

## Announcements

All updates to this library are documented in our [CHANGELOG](https://github.com/CoCreate-app/CoCreate-events/blob/master/CHANGELOG.md) and [releases](https://github.com/CoCreate-app/CoCreate-events/releases). You may also subscribe to email for releases and breaking changes.

---

## Roadmap

Upcoming enhancements include:

* Development mode diagnostics for unrecognized and legacy attributes
* Typed value coercion for boolean properties
* Value source queries for assignments sourced from other elements
* Expanded observer configuration
* Devtools inspection of bindings attached to an element

If you are interested in the future direction of this project, please take a look at our open [issues](https://github.com/CoCreate-app/CoCreate-events/issues) and [pull requests](https://github.com/CoCreate-app/CoCreate-events/pulls). We would love to hear your feedback.

---

## How to Contribute

We encourage contribution to our libraries (you might even score some nifty swag), please see our [CONTRIBUTING](https://github.com/CoCreate-app/CoCreate-events/blob/master/CONTRIBUTING.md) guide for details.

We want this library to be community-driven, and CoCreate led. We need your help to realize this goal. To help make sure we are building the right things in the right order, we ask that you create [issues](https://github.com/CoCreate-app/CoCreate-events/issues) and [pull requests](https://github.com/CoCreate-app/CoCreate-events/pulls) or merely upvote or comment on existing issues or pull requests.

We appreciate your continued support, thank you!

---

## About

CoCreate-events is guided and supported by the CoCreate Developer Experience Team.

Please Email the Developer Experience Team [here](mailto:develop@cocreate.app) in case of any queries.

CoCreate-events is maintained and funded by CoCreate. The names and logos for CoCreate are trademarks of CoCreate, LLC.

---

## License

This software is dual-licensed under the GNU Affero General Public License version 3 (AGPLv3) and a commercial license.

* **Open Source Use**: For open-source projects and non-commercial use, this software is available under the AGPLv3. The AGPLv3 allows you to freely use, modify, and distribute this software, provided that all modifications and derivative works are also licensed under the AGPLv3. For the full license text, see the [LICENSE file](https://github.com/CoCreate-app/CoCreate-events/blob/master/LICENSE).

* **Commercial Use**: For-profit companies and individuals intending to use this software for commercial purposes must obtain a commercial license. The commercial license is available when you sign up for an API key on our [website](https://cocreate.app). This license permits proprietary use and modification of the software without the copyleft requirements of the AGPLv3. It is ideal for integrating this software into proprietary commercial products and applications.

If you have not purchased a commercial license and intend to use this software for commercial purposes, you are required to sign up for an API key on our website.
