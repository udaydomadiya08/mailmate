// app/inbox/page.tsx

type Email = {
  id: string;
  from: string;
  subject: string;
  body: string;
};

const testEmails: Email[] = [
  {
    id: "1",
    from: "alice@example.com",
    subject: "Meeting Tomorrow",
    body: "Hey! Just checking if you're free at 11 AM tomorrow."
  },
  {
    id: "2",
    from: "bob@example.com",
    subject: "Order Confirmed",
    body: "Your order has been shipped!"
  }
];

export default function InboxPage() {
  return (
    <div className="p-6">
      <h1 className="font-semibold text-2xl mb-4">Inbox</h1>
      <div className="space-y-4">
        {testEmails.map(email => (
          <div
            key={email.id}
            className="p-4 border rounded-lg bg-white hover:shadow-md transition"
          >
            <p className="font-medium">From: {email.from}</p>
            <p className="text-gray-600">{email.subject}</p>
            <p className="text-sm mt-2 text-gray-500">{email.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
