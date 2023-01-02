import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h3> Menu </h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
        <Rating />
    </div>
  );
}

function Rating () {
  return(
  <div>
      <div> <Star /> </div>
  </div>
  )}

function Star() {
    return (
        <div>
            This is star component in Rating
        </div>
    )
}

function Accordion () {
    return <div>
          <h3> Menu </h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
}
export default App;
