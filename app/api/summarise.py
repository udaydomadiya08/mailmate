from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class SummarizeRequest(BaseModel):
    text: str

@app.post("/api/summarise")
async def summarize(req: SummarizeRequest):
    text = req.text.strip()

    if not text:
        return {"summary": "⚠️ No content to summarize"}

    # ✅ Fake AI Rule-based Summary (extract key sentence)
    lines = text.splitlines()
    title = lines[0] if lines else ""
    
    summary = f"🔹 {title} — Important update summarized."

    return {"summary": summary}
