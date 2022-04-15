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
    res.status(200);
  }
);

router.post("/create_note", checkAuthenticated, (req: any, res: any) => {
  res.status(200);
});

router.delete("/delete_note", checkAuthenticated, (req: any, res: any) => {
  res.status(200);
});

router.post("/create_group", checkAuthenticated, (req: any, res: any) => {
  res.status(200);
});

router.delete("/delete_group", checkAuthenticated, (req: any, res: any) => {
  res.status(200);
});

router.post("/move_to_group", checkAuthenticated, (req: any, res: any) => {
  res.status(200);
});

module.exports = router;
