import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema(
  {
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

const Collection = mongoose.model("collection", collectionSchema);
module.exports = Collection;
