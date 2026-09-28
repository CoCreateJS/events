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
