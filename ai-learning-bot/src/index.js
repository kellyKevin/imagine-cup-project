import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18
import App from './App';
import './index.css'; // Ensure this file includes Tailwind CSS and any custom styles

// Create a root element for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside StrictMode for highlighting potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
