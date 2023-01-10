import Accordion from "../Accordion/Accordion";
import React from "react";

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {
    if (props.value === 3) {
    return (
        <div>
            <> This is title </>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={true}/>
        </div>
    )
}
    if (props.value === 4) {
        return (
            <div>
                <> This is title </>
                <Star selected={false}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        )
    }
    return (
        <div>
            <> This is title </>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

type StarPropsType = {
    selected : boolean
}

    function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span>
            <b>This is star component in Rating</b> </span>
    } else {
        return (
            <span>
            This is star component in Rating </span>
        )
    }
}
