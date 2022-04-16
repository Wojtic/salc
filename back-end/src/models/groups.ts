import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    notes: [
      {
        title: String,
        note_id: mongoose.Schema.Types.ObjectId,
      },
    ],
    public: {
      type: Boolean,
      default: false,
    },
  },
  { strict: false }
);

const Group = mongoose.model("group", groupSchema);
module.exports = Group;
