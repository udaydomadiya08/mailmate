// ...existing code...
"use client";
import { useEffect, useState } from "react";
// changed: use relative imports instead of '@/...'
import EmailCard from "../../components/EmailCard";
import { DEMO_EMAILS } from "../../lib/demoEmails";

export default function InboxPage() {
  const [emails, setEmails] = useState(DEMO_EMAILS);

  // keep simple: emails already available from demo file
  useEffect(() => {
    // small simulated delay to look realistic
    const t = setTimeout(() => setEmails(DEMO_EMAILS), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">📥 Demo Inbox</h1>
      <p className="text-sm text-gray-600 mb-6">AI will summarize when you click the button.</p>

      <div className="space-y-4">
        {emails.map((e) => (
          <EmailCard key={e.id} email={e} />
        ))}
      </div>
    </div>
  );
}
// ...existing code...