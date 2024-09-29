import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

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

  useEffect(() => {
    // Scroll to the bottom of the chat container whenever messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800 text-center py-4">AI Chat Assistant</h1>

      <div className="flex-grow flex flex-col">
        <div
          ref={chatContainerRef}
          className="flex-grow overflow-y-auto p-4 space-y-4 bg-white rounded-lg shadow-lg"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-4 max-w-xs rounded-lg text-sm shadow-sm 
                ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && <div className="text-gray-500 text-center">AI is typing...</div>}
        </div>

        <form onSubmit={handleSend} className="flex p-4 border-t border-gray-200">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 transition-all"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 ml-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
