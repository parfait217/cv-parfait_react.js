import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Enregistrement du service worker
// Enregistrement du service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service worker registered: ', registration);
      })
      .catch(error => {
        console.error('Error registering service worker: ', error);
      });
  });
}