// Basic diff helper: tokenizes on word boundaries, lowercases, and returns added/removed

const { v4: uuidv4 } = require("uuid");

function tokenize(text) {
  if (!text || typeof text !== "string") return [];
  // Keep only letters/numbers and apostrophes; split on whitespace/punctuation
  return text
    .toLowerCase()
    .split(/[^a-z0-9']+/)
    .filter(Boolean);
}

function computeDiff(oldText = "", newText = "") {
  const oldTokens = tokenize(oldText);
  const newTokens = tokenize(newText);

  const oldSet = new Set(oldTokens);
  const newSet = new Set(newTokens);

  // Added: in new but not in old
  const added = [...newSet].filter((w) => !oldSet.has(w));
  // Removed: in old but not in new
  const removed = [...oldSet].filter((w) => !newSet.has(w));

  const summary = {
    uuid: uuidv4(),
    timestamp: new Date().toISOString().replace("T", " ").slice(0, 19),
    addedWords: added,
    removedWords: removed,
    oldLength: oldText.length,
    newLength: newText.length,
  };

  return summary;
}

module.exports = { computeDiff };
