import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string

}
type AccordionTitlePropsType = {
    title: "menu" | "users"
}
type AccordionBodyPropsType = AccordionTitlePropsType


function Accordion(props: AccordionPropsType) {
    const [visible, setVisible] = useState(false)

    return (
        <>

            <AccordionTitle title={props.titleValue as "menu" | "users"} />
            <button onClick={event => setVisible(!visible)}>Open</button>
            {visible ?
                <AccordionBody title={props.titleValue as "menu" | "users" }/>
               :
               <></>
            }
        </>
    )
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3> --- {props.title} --- </h3>
    )
};

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <>
        (props.title === "menu")
            <ul>
                <li>1 lemon</li>
                <li>2 apple</li>
                <li>3 tomato</li>
            </ul> :
            <ul>
                <li>1 cat</li>
                <li>2 dogs</li>
                <li>3 jessi</li>
            </ul>
        </>
    )
}


export default Accordion;