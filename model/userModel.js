const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    seller: {
      type: Boolean,
    },

    contents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "contents",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
