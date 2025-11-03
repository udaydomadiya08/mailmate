type Email = {
  id: string;
  from: string;
  subject: string;
  body: string;
};

export default function EmailCard({ email }: { email: Email }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">
      <p className="font-semibold">{email.subject}</p>
      <p className="text-sm text-gray-600">From: {email.from}</p>
      <p className="mt-2 text-gray-800">{email.body}</p>
    </div>
  );
}
