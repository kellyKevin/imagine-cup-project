import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const goToChat = () => {
    navigate('/chat');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 p-6">
      <h1 className="text-5xl font-extrabold text-white mb-10 animate-pulse">
        Welcome to the Dashboard
      </h1>
      <p className="text-lg text-white mb-6 text-center max-w-lg">
        Connect with our AI assistant and get the help you need. Click the button below to start a chat.
      </p>
      <button
        onClick={goToChat}
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 focus:outline-none focus:ring-4 focus:ring-yellow-300"
      >
        Start Chat
      </button>

      <div className="mt-10 text-white text-sm">
        <p>Need assistance? Feel free to reach out!</p>
        <p>© 2024 Your Company Name</p>
      </div>
    </div>
  );
};

export default Dashboard;
