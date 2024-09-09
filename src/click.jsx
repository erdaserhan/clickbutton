import { useState } from "react";

export default function ClickCounter(props) {
    const [count, setCount] = useState(20);
    
    function handleClick () {
        setCount(count - 1);
    }

    return (
        <>
        <button style={{backgroundColor: props.color, color: props.textcolor, fontSize: props.size}} onClick={handleClick}>{props.text}</button>
        <h3> You clicked { count } times</h3> 
        </>
    )
}