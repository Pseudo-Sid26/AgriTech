// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18+ use createRoot
import './index.css'; // Ensure this file exists
import App from './App'; // Ensure this file exists

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />  /* Simply render the App component, no need for another Router here */
);
