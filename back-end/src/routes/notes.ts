// tslint:disable:no-console
// tslint:disable:no-var-requires
import express from "express";
const router = express.Router();
const User = require("../models/users");
const Collection = require("../models/collections");
const Note = require("../models/notes");
const Group = require("../models/groups");

import { checkAuthenticated } from "../utils";

router.post("/create_collection", checkAuthenticated, (req: any, res: any) => {
  res.status(200);
});

router.delete(
  "/delete_collection",
  checkAuthenticated,
  (req: any, res: any) => {
    res.sendStatus(200);
  }
);

router.post("/move_to_collection", checkAuthenticated, (req: any, res: any) => {
  res.sendStatus(200);
});

router.get("/get_collection", checkAuthenticated, (req: any, res: any) => {
  res.sendStatus(200);
});

router.get(
  "/get_collection_with_notes",
  checkAuthenticated,
  (req: any, res: any) => {
    res.sendStatus(200);
  }
);

router.post("/create_note", checkAuthenticated, (req: any, res: any) => {
  if (
    (req.body.noteURL === undefined && req.body.noteContents === undefined) ||
    req.body.noteTitle === undefined ||
    req.body.noteCollection === undefined
  ) {
    return res.status(400).json({ message: "Missing arguments" });
  }

  const newNote = new Note({
    title: req.body.noteTitle,
    owner_Collection: req.body.noteCollection,
    link: req.body.noteURL,
    contents: req.body.noteContents,
  });

  newNote.save((err: Error) => {
    if (err) return res.sendStatus(400);
    res.sendStatus(200);
  });
});

router.delete("/delete_note", checkAuthenticated, (req: any, res: any) => {
  res.sendStatus(200);
});

router.get("/get_note", checkAuthenticated, (req: any, res: any) => {
  res.sendStatus(200);
});

router.post("/create_group", checkAuthenticated, (req: any, res: any) => {
  res.sendStatus(200);
});

router.delete("/delete_group", checkAuthenticated, (req: any, res: any) => {
  res.sendStatus(200);
});

router.post("/move_to_group", checkAuthenticated, (req: any, res: any) => {
  res.sendStatus(200);
});

router.get("/get_group", checkAuthenticated, (req: any, res: any) => {
  res.sendStatus(200);
});

router.get(
  "/get_group_with_notes",
  checkAuthenticated,
  (req: any, res: any) => {
    res.sendStatus(200);
  }
);

module.exports = router;
