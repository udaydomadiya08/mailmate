"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
      <h1 className="text-4xl font-bold mb-6">📬 MailMate</h1>
      <p className="text-lg text-gray-600 mb-10">
        Your AI powered email assistant
      </p>

      <Link
        href="/inbox"
        className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Go to Inbox →
      </Link>
    </div>
  );
}
