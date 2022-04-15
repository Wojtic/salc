"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const noteSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    collection: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
    },
    link: {
        type: String,
        required: false,
    },
    contents: {
        type: String,
        required: false,
    },
}, { strict: false });
const Note = mongoose_1.default.model("note", noteSchema);
module.exports = Note;
//# sourceMappingURL=notes.js.map