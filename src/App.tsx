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
      <> This is title </>
       <Star />
      <Star />
      <Star />
      <Accordion />

  </div>
  )}

function Star() {
    console.log("Star rendered")
    return (
        <div>
            This is star component in Rating
        </div>
    )
}

function Accordion () {
    return (
        <>
        <AccordionTitle />
      <AccordionBody />
        </>
    )}

export default App;

function AccordionTitle() {
    return (
    <h3> Menu </h3>
    )
};

function AccordionBody() {
    return (
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    )
}