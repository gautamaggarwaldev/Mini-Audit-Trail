import React from "react";

export default function VersionCard({ version }) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">{version.timestamp}</p>
        <p className="text-sm text-gray-500">
          {version.oldLength} → {version.newLength}
        </p>
      </div>

      <p className="text-sm mt-2">
        <strong>Added:</strong>{" "}
        {version.addedWords.length ? version.addedWords.join(", ") : "—"}
      </p>
      <p className="text-sm mt-1">
        <strong>Removed:</strong>{" "}
        {version.removedWords.length ? version.removedWords.join(", ") : "—"}
      </p>

      <details className="mt-2">
        <summary className="cursor-pointer text-blue-600 text-sm">
          View Content
        </summary>
        <p className="mt-2 text-sm whitespace-pre-wrap">{version.content}</p>
      </details>
    </div>
  );
}
