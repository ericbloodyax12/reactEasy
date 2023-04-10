import React from 'react';
import './App.css';
import {Rating, Rating as R} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            <input/>
            <input type={"date"}/>
            <input type={"password"}/>
            Article 1
            <R value={3}/>
            <Accordion titleValue={"menu"} />
            <Accordion titleValue={"users"}/>
            Article 2
            <Rating value={3}/>
            <Rating value={4}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>

}


export default App;