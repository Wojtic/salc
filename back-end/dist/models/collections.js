"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const collectionSchema = new mongoose_1.default.Schema({
    owner: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
    },
    notes: [
        {
            title: String,
            note_id: mongoose_1.default.Schema.Types.ObjectId,
        },
    ],
    public: {
        type: Boolean,
        default: false,
    },
}, { strict: false });
const Collection = mongoose_1.default.model("collection", collectionSchema);
module.exports = Collection;
//# sourceMappingURL=collections.js.map