const { Node } = require("prosemirror-model");
const { Plugin, PluginKey } = require("prosemirror-state");

function toObj(src) {
    if (Array.isArray(src)) {
        return src.map(toGun)
    }
    if (typeof src === "object") {
        return Object.keys(src).reduce((acc, key) => {
            acc[key] = toObj(src[key])
            return acc;
        }, {})
    }
    return src
}