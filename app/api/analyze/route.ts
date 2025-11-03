// app/api/summarise/route.ts
import { NextResponse } from "next/server";

function fakeSummarize(text: string) {
  // small heuristic: take first sentence or first 8 words of subject/body to look smart
  const s = text.trim().replace(/\s+/g, " ");
  const firstLine = s.split("\n")[0] || s;
  const end = firstLine.split(".")[0] || firstLine;
  const words = end.split(" ").slice(0, 12).join(" ");
  return `${words}…`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const text: string = body.text || "";

    // simulate "AI thinking" delay (short)
    await new Promise((r) => setTimeout(r, 750));

    const summary = fakeSummarize(text);
    return NextResponse.json({ summary });
  } catch (e) {
    return NextResponse.json({ summary: "⚠️ No summary (demo)." }, { status: 200 });
  }
}
