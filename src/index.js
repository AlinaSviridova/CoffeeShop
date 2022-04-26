import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App'; 
import Navigation from './Navigation/Navigation';
import beansLineBlack from './images/beans-logo-black.svg'; 
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
           <Navigation/>
      </header>
      <App />
      <footer>
           <Navigation/>
           <img className="bottom-img" src={beansLineBlack}  alt="beansLine" />
      </footer> 
    </BrowserRouter>
  </React.StrictMode>
);
 
