import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    email_verified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    collections: [mongoose.Schema.Types.ObjectId],
  },
  { strict: false }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
