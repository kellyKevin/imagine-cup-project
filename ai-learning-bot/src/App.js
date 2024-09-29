import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ChatWindow from './components/ChatWindow';
import Onboarding from './components/Onboarding';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chat" element={<ChatWindow />} />
        <Route path="/onboarding" element={<Onboarding />} />
        {/* Add other routes if necessary */}
      </Routes>
    </Router>
  );
};

export default App;
