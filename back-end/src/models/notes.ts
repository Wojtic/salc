import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    collection: {
      type: mongoose.Schema.Types.ObjectId,
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
  },
  { strict: false }
);

const Note = mongoose.model("note", noteSchema);
module.exports = Note;
