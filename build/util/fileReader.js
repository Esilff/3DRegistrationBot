"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJSON = void 0;
require("fs");
const promises_1 = require("fs/promises");
async function readJSON(path) {
    let data = null;
    await (0, promises_1.readFile)(path).then((buffer) => {
        data = JSON.parse(buffer.toString());
    });
    return data;
}
exports.readJSON = readJSON;
