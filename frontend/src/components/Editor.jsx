import React from "react";

export default function Editor({ content, setContent, onSave, loading }) {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-semibold">Content Editor</label>
      <textarea
        rows="8"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
        placeholder="Type something here..."
      ></textarea>

      <button
        onClick={onSave}
        disabled={loading}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Version"}
      </button>
    </div>
  );
}
