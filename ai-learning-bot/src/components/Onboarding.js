import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const [userName, setUserName] = useState('');
  const [topic, setTopic] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle user onboarding (e.g., save user data)
    navigate('/chat'); // Navigate to chat after onboarding
  };

  return (
    <div>
      <h1>Onboarding</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Choose a topic" 
          value={topic} 
          onChange={(e) => setTopic(e.target.value)} 
          required 
        />
        <button type="submit">Start Learning</button>
      </form>
    </div>
  );
};

export default Onboarding;
