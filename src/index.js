import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './styles/main.css';
import App from './App';
import searchLogo from './assets/searchlogo.png';

// Dynamically update the favicon from the assets folder
const existingLink = document.querySelector("link[rel~='icon']");
if (existingLink) {
  document.head.removeChild(existingLink);
}

const newLink = document.createElement('link');
newLink.rel = 'icon';
newLink.type = 'image/png';
newLink.href = searchLogo;
document.head.appendChild(newLink);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);