import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ChatWindow from './components/ChatWindow';
import Onboarding from './components/Onboarding';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="p-6">
            <h1 className="text-2xl font-extrabold text-center text-gray-800 mb-4 animate-pulse">
              Welcome to Your App
            </h1>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/chat" element={<ChatWindow />} />
              <Route path="/onboarding" element={<Onboarding />} />
              {/* Add other routes if necessary */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
