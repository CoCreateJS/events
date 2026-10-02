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
vm.runInNewContext(code, context);

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
