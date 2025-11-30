const Version = require("../models/version");
const { computeDiff } = require("../utils/diff");

// POST /api/versions/save-version
const saveVersion = async (req, res) => {
  try {
    const { content } = req.body;
    if (typeof content !== "string")
      return res.status(400).json({ message: "content required" });

    // Get latest version
    const latest = await Version.findOne().sort({ _id: -1 }).lean();
    const oldContent = latest ? latest.content : "";

    const summary = computeDiff(oldContent, content);

    const versionDoc = new Version({
      uuid: summary.uuid,
      timestamp: summary.timestamp,
      addedWords: summary.addedWords,
      removedWords: summary.removedWords,
      oldLength: summary.oldLength,
      newLength: summary.newLength,
      content,
    });

    await versionDoc.save();

    return res.status(201).json(versionDoc);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// GET /api/versions
const getVersions = async (req, res) => {
  try {
    const versions = await Version.find().sort({ _id: -1 }).lean();
    return res.json(versions);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { saveVersion, getVersions };
