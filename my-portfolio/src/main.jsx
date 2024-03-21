import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Adjust the path if your App.jsx is located elsewhere
import './index.css'; // Global styles

const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure this matches the ID in your index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
