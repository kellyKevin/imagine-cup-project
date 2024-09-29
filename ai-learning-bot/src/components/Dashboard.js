import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const goToChat = () => {
    navigate('/chat');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={goToChat}>Start Chat</button>
      {/* Add more dashboard functionality as needed */}
    </div>
  );
};

export default Dashboard;
