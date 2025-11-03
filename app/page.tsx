// app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Welcome to MailMate ✉️</h1>
        <Link
          href="/inbox"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go to Inbox
        </Link>
      </div>
    </main>
  );
}
