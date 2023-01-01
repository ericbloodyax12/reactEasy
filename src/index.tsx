import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <div> Hello </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();








let users = [{
    name: "eric",
    age: "23",
    address: {
        city: "Erevan",
        country: "Armenia"
    }
}, {
    name: "as",
    age: "31",
    address: {
        city: "Erevan",
        country: "Armenia"
    }
},
    {
        name: "unknown",
        age: "23",
        address: {
            city: "Erevan",
            country: "Armenia"
        },
    }
];

console.log(users[1].name);

let b; // any
let c: Array<number | string>;