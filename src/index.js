import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 uses createRoot from this
import './index.css';                    // Optional global styles
import App from './App';                 // Your main App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Link to public/index.html <div id="root"></div>
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
