import React from "react";

type Email = {
  id: string;
  from: string;
  subject: string;
  body: string;
};

export default function EmailCard({ email }: { email: Email }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">
      <p className="text-sm text-gray-600"><strong>From:</strong> {email.from}</p>
      <h2 className="font-semibold text-lg">{email.subject}</h2>
      <p className="text-gray-700">{email.body}</p>
    </div>
  );
}
