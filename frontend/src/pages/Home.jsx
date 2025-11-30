import React, { useEffect, useState } from "react";
import { API } from "../api";
import Editor from "../components/Editor";
import VersionCard from "../components/VersionCard";

export default function Home() {
  const [content, setContent] = useState("");
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadVersions = async () => {
    try {
      const res = await API.get("/versions");
      setVersions(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load versions");
    }
  };

  useEffect(() => {
    loadVersions();
  }, []);

  const saveVersion = async () => {
    if (!content.trim()) {
      alert("Please enter some content");
      return;
    }

    setLoading(true);
    try {
      await API.post("/versions/save-version", { content });
      setContent("");
      loadVersions();
    } catch (err) {
      console.error(err);
      alert("Failed to save version");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mini Audit Trail</h1>

      <Editor
        content={content}
        setContent={setContent}
        onSave={saveVersion}
        loading={loading}
      />

      <h2 className="text-xl font-semibold mb-3">Version History</h2>

      <div className="space-y-3">
        {versions.length === 0 && (
          <p className="text-gray-500">No versions saved yet.</p>
        )}

        {versions.map((v) => (
          <VersionCard key={v.uuid} version={v} />
        ))}
      </div>
    </div>
  );
}
