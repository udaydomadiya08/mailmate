import EmailCard from "@/components/EmailCard";

const emails = [
  {
    id: "1",
    from: "elon@tesla.com",
    subject: "Your Tesla Delivery Update",
    body: "Congratulations! Your Model S is ready for pickup.",
  },
  {
    id: "2",
    from: "steve@apple.com",
    subject: "New iPhone idea",
    body: "Hey, want to discuss a new feature for iPhone?",
  },
  {
    id: "3",
    from: "ceo@microsoft.com",
    subject: "Partnership request",
    body: "Let's collaborate on AI projects!",
  },
];

export default function InboxPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      <div className="space-y-4">
        {emails.map((e) => (
          <EmailCard key={e.id} email={e} />
        ))}
      </div>
    </div>
  );
}
