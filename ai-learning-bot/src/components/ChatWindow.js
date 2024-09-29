import React, { useState } from 'react';
import axios from 'axios';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    
    // Send user message
    const newUserMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    // Generate AI response
    setLoading(true);
    try {
      const aiResponse = await getAIResponse(input);
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorResponse = { text: "Sorry, I couldn't fetch a response. Please try again.", sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, errorResponse]);
    }
    
    setInput(''); // Clear input after sending
    setLoading(false);
  };

  // Function to fetch AI response from OpenAI API
  const getAIResponse = async (userInput) => {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo", // or any other available model
      messages: [{ role: "user", content: userInput }],
      max_tokens: 150, // Adjust the token count as necessary
    }, {
      headers: {
        'Authorization': `Bearer YOUR_API_KEY`, // Replace with your OpenAI API key
        'Content-Type': 'application/json',
      },
    });

    const responseText = response.data.choices[0].message.content;
    return { text: responseText, sender: 'bot' };
  };

  return (
    <div>
      <h1>Chat Window</h1>
      <div className="chat-container">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="loading">Typing...</div>}
      </div>
      <form onSubmit={handleSend}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type a message..." 
          required 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;
