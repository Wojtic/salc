"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-console
// tslint:disable:no-var-requires
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const User = require("../models/users");
const Collection = require("../models/collections");
const Note = require("../models/notes");
const Group = require("../models/groups");
const utils_1 = require("../utils");
router.post("/create_collection", utils_1.checkAuthenticated, (req, res) => {
    res.status(200);
});
router.delete("/delete_collection", utils_1.checkAuthenticated, (req, res) => {
    res.sendStatus(200);
});
router.post("/move_to_collection", utils_1.checkAuthenticated, (req, res) => {
    res.sendStatus(200);
});
router.get("/get_collection", utils_1.checkAuthenticated, (req, res) => {
    res.sendStatus(200);
});
router.get("/get_collection_with_notes", utils_1.checkAuthenticated, (req, res) => {
    res.sendStatus(200);
});
router.post("/create_note", utils_1.checkAuthenticated, (req, res) => {
    if ((req.body.noteURL === undefined && req.body.noteContents === undefined) ||
        req.body.noteTitle === undefined ||
        req.body.noteCollection === undefined) {
        return res.status(400).json({ message: "Missing arguments" });
    }
    res.sendStatus(200);
});
router.delete("/delete_note", utils_1.checkAuthenticated, (req, res) => {
    res.sendStatus(200);
});
router.get("/get_note", utils_1.checkAuthenticated, (req, res) => {
    res.sendStatus(200);
});
router.post("/create_group", utils_1.checkAuthenticated, (req, res) => {
    res.sendStatus(200);
});
router.delete("/delete_group", utils_1.checkAuthenticated, (req, res) => {
    res.sendStatus(200);
});
router.post("/move_to_group", utils_1.checkAuthenticated, (req, res) => {
    res.sendStatus(200);
});
router.get("/get_group", utils_1.checkAuthenticated, (req, res) => {
    res.sendStatus(200);
});
router.get("/get_group_with_notes", utils_1.checkAuthenticated, (req, res) => {
    res.sendStatus(200);
});
module.exports = router;
//# sourceMappingURL=notes.js.map