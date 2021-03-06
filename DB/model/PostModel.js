const mongoose = require("mongoose");
const UserSchema = {
  url: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
},
date: { type: Date, default: Date.now },
};

module.exports = mongoose.model("Post", UserSchema);
