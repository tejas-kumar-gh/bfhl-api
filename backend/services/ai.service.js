const axios = require("axios");
const { GEMINI_KEY } = require("../config/env");

async function askAI(question) {
  const res = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,
    {
      contents: [
        {
          parts: [{ text: question }]
        }
      ]
    }
  );

  return res.data.candidates[0].content.parts[0].text;
}

module.exports = { askAI };
