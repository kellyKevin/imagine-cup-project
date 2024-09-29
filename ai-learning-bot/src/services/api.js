// src/services/api.js
const apiUrl = 'https://your-ai-backend-url.com'; // Replace with your actual API endpoint

export const sendMessageToAI = async (message) => {
  const response = await fetch(`${apiUrl}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });
  return await response.json(); // Adjust based on your API response structure
};
