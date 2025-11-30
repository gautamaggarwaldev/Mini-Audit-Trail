const mongoose = require("mongoose");

const VersionSchema = new mongoose.Schema({
  uuid: { type: String, required: true, unique: true },
  timestamp: { type: String, required: true },
  addedWords: { type: [String], default: [] },
  removedWords: { type: [String], default: [] },
  oldLength: { type: Number, required: true },
  newLength: { type: Number, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model("Version", VersionSchema);
