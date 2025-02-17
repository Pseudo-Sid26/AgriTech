import React, { useState } from "react";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to handle user input and interact with the backend
  const handleChat = async () => {
    if (!userInput.trim()) return;

    // Add user input to chat history
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { sender: "user", message: userInput },
    ]);

    setLoading(true);

    try {
      // Send the user input to the backend to interact with OpenAI
      const response = await fetch("http://localhost:5000/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }), // Send user input as message
      });

      const data = await response.json();

      if (data.reply) {
        // Add AI's response to chat history
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { sender: "ai", message: data.reply },
        ]);
      } else {
        console.error("Error:", data.reply);
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { sender: "ai", message: "AI is unavailable right now." },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { sender: "ai", message: "Error occurred while processing your request." },
      ]);
    } finally {
      setLoading(false);
      setUserInput(""); // Clear user input
    }
  };

  return (
    <div className="chatbot-container">
      <h2>Chat with AI</h2>
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={chat.sender === "user" ? "user-message" : "ai-message"}
          >
            <strong>{chat.sender === "user" ? "You: " : "AI: "}</strong>
            {chat.message}
          </div>
        ))}
        {loading && <div>AI is typing...</div>}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleChat} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
