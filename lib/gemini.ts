const GEMINI_KEYS = [
        "AIzaSyCG-BB-0iP8bTiTJiT9ZgC5eJkzDftV28I",
        "AIzaSyBGpWydub8jBjKW_JM808Q57x_KSVg1Fxw",
        "AIzaSyD-7i3eVHY_tQBlLedDGUYb12tPm88F2bg",
        "AIzaSyCT-678mR3ur4beLyWJJ-QdWA8W8cHvWtM",
        "AIzaSyBnKryfOjV-XsR0tdXWdYv4MXnbvvh_QWU",
        "AIzaSyBenRCth2XXKL6BXh_gRtDAznPfbTd9t4k",
        "AIzaSyCG6iIVxuoPAwRC8FL0DMHhywAFg58vxbM",
        "AIzaSyCWyJeh999WPRt5Mf8hgAfT78hkl_oyy3I",
        "AIzaSyDQoF2-V-jPVinMIHIs4Dts8KPpXeL-5_E",
        "AIzaSyA5VLL-EFpKs2Z0iVdLLK6ir_n9-b1wtrc",
        "AIzaSyCRNFcI51fF1KoS3YbBnaGtFMLIhSqnaSs",
        "AIzaSyCkhmr6hYUKCQMVuNaVMwhUmfLIrvOMn7g",
        "AIzaSyBFZS7DX_wDWvWjln22G3zN2XjORuMJV5o",
        "AIzaSyDOFT9J2OlqyR2KhhMP9qBaE3LqeLQLaIc",
        "AIzaSyDDBqYMNprBSxs006y_Mjm-2iFsedqvyE4",
        "AIzaSyAv7KdGJul7xb5tCnx2bLqZEStXTTtY-NA",
        "AIzaSyAFn_8ws-tj-ix7R_MIvTg-REUZ-93riZo",
        "AIzaSyB9ESuSqJMbEnAdvBKxaGJsfTrkdvaobYc",
        "AIzaSyCqXHtA2dl3tUumG21cMwbhxQdVP9LzypY",
        "AIzaSyAQCRR1KSbgiF3OkXUOInZOntFw1VU4n4k",
        "AIzaSyChdyTOEFX11YlnDaLKMh7IAXA_OzxpWSg",
        "AIzaSyBcBKM39mCY2x2-90tId2LRRQbOzwefLpE",

    ];

let keyIndex = 0;

async function fetchWithFailover(url: string, options: any) {
  while (keyIndex < GEMINI_KEYS.length) {
    const key = GEMINI_KEYS[keyIndex];
    try {
      const res = await fetch(`${url}?key=${key}`, options);

      // If key unauthorized → switch & retry
      if (res.status === 401 || res.status === 403) {
        console.warn(`❌ Key failed: ${key}`);
        keyIndex++;
        continue;
      }

      return res;
    } catch (err) {
      console.warn(`⚠️ Error — switching key`);
      keyIndex++;
    }
  }
  throw new Error("🚫 All Gemini keys failed");
}

export async function analyzeEmail(email: string) {
  const res = await fetchWithFailover(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `Analyze this email and return JSON with:
                - summary
                - category (Social, Important, Promotions)
                - priority score (0-100)
                Email:
                ${email}`
              }
            ]
          }
        ]
      })
    }
  );

  const json = await res.json();
  try {
    return JSON.parse(json.candidates[0].content.parts[0].text);
  } catch {
    return { summary: "Unable to summarize", category: "Unknown", priority: 0 };
  }
}
