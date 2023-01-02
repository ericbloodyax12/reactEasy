import React from 'react';
import './App.css';
import {Rating, Rating as R} from "./components/Rating/Rating";
import Acc from "./components/Accordion/Accordion";

function App() {
  return (
    <div>
        <PageTitle title={"This is App component"} />
        <PageTitle title={"My friens"} />
        <input/>
        <input type={"date"}/>
        <input  type={"password"}/>
        Article 1
        <R value={3} />
        <Acc />
        Article 2
        <Rating value={4}/>
    </div>
  );
}
function PageTitle(props:any) {
    return <h1>{props.title}</h1>
    
}


export default App;