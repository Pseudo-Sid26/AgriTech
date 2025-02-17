const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config(); // Ensure environment variables are loaded from the .env file

const openaiAPIKey = process.env.OPENAI_API_KEY; // Get the API key from .env

if (!openaiAPIKey) {
  console.error("OpenAI API key is missing!");
  process.exit(1); // Exit if API key is missing
}

// In-memory cache for repeated queries
const cache = new Map();

// Request cooldown (in milliseconds)
let lastRequestTimestamp = 0;
const requestCooldown = 60000; // 60 seconds cooldown

// Function to interact with OpenAI's API
const chatWithAI = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "No message provided" });
  }

  // Check if the message has been cached before
  if (cache.has(message)) {
    return res.json({ reply: cache.get(message) });
  }

  const now = Date.now();
  if (now - lastRequestTimestamp < requestCooldown) {
    return res.status(429).json({ reply: "Please wait before sending another message." });
  }

  lastRequestTimestamp = now; // Update the timestamp after a successful request

  try {
    const openAIRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    };

    const openaiResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      openAIRequestBody,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${openaiAPIKey}`,
        },
      }
    );

    const aiReply = openaiResponse.data.choices[0].message.content;

    // Cache the response for future requests
    cache.set(message, aiReply);

    res.json({ reply: aiReply });
  } catch (error) {
    console.error("AI Chat Error:", error.response?.data || error.message);

    if (error.response?.status === 429) {
      return res.status(429).json({ reply: "Too many requests. Please try again later." });
    }

    res.status(500).json({ reply: "AI is unavailable right now." });
  }
};

module.exports = { chatWithAI };
