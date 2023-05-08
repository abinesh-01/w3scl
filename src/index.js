import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const myElement = document.getElementById("root");
const myRoot = ReactDOM.createRoot(myElement);
myRoot.render(<App/>)