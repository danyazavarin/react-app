import Button from "./Button/Button.jsx";
import {differences} from "../data.js";
import {useState} from "react";

export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null);

    function handleClick(type) {
        setContentType(type);
    }

    return (
        <section>
            <h3>Чем мы отличаемся от других?</h3>
            <Button isActive={contentType === 'way'} onClick={() => setContentType('way')}>1</Button>
            <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>2</Button>
            <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>3</Button>
            {contentType ? <p>{differences[contentType]}</p> : <p>Push the button</p>}
        </section>
    )
}