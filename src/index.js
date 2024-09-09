import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'
import ClickCounter from './click';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClickCounter size="3em" color="tomato" text="Click me" textcolor="white"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
