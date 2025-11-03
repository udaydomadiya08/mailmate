export type Email = {
  id: string;
  sender: string;
  subject: string;
  snippet: string;
  category: "Important" | "Social" | "Promotions";
  priority: number;
};

export const mockEmails: Email[] = [
  {
    id: "1",
    sender: "Amazon",
    subject: "Your package has been shipped",
    snippet: "Track your order or manage deliveries here...",
    category: "Promotions",
    priority: 30,
  },
  {
    id: "2",
    sender: "College Admin",
    subject: "Exam Schedule Update",
    snippet: "Important announcement regarding your semester exams...",
    category: "Important",
    priority: 90,
  },
  {
    id: "3",
    sender: "Instagram",
    subject: "New login detected",
    snippet: "Someone tried to log in from another device...",
    category: "Social",
    priority: 70,
  },
];
