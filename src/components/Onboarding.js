import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const [userName, setUserName] = useState('');
  const [topic, setTopic] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/chat'); // Navigate to chat after onboarding
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 to-purple-500 p-6">
      <h1 className="text-4xl font-extrabold text-white mb-8 animate-pulse">
        Welcome to Onboarding
      </h1>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105"
      >
        <div className="mb-6">
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            required 
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
          />
        </div>
        <div className="mb-6">
          <input 
            type="text" 
            placeholder="Choose a topic" 
            value={topic} 
            onChange={(e) => setTopic(e.target.value)} 
            required 
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-200"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-indigo-600 text-white font-semibold p-4 rounded-lg shadow-lg transition duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          Start Learning
        </button>
      </form>
      <div className="mt-6 text-white text-sm text-center">
        <p>Need help? Contact our support team.</p>
      </div>
    </div>
  );
};

export default Onboarding;
