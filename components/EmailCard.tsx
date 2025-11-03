// components/EmailCard.tsx
"use client";
import { useState } from "react";

export default function EmailCard({ email }: { email: any }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = async () => {
    setLoading(true);
    setError(null);
    setSummary(null);

    try {
      const res = await fetch("/api/summarise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: `${email.subject}\n\n${email.body}` }),
      });
      const data = await res.json();
      setSummary(data.summary);
    } catch (e) {
      setError("⚠️ Summarization failed (demo).");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded p-4 bg-white shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-600">{email.from}</p>
          <h3 className="font-semibold">{email.subject}</h3>
        </div>
      </div>

      <p className="text-gray-700 mt-2 line-clamp-3">{email.body}</p>

      <div className="mt-3 flex items-center gap-3">
        <button
          onClick={handleSummarize}
          disabled={loading}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Summarizing…" : "✨ Summarize"}
        </button>

        {summary && (
          <div className="ml-2 px-3 py-2 bg-green-50 border border-green-200 rounded text-sm">
            <strong>AI:</strong> <span className="ml-2">{summary}</span>
          </div>
        )}

        {error && (
          <div className="ml-2 px-3 py-2 bg-red-50 border border-red-200 rounded text-sm">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
