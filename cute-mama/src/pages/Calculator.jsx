import {NavigationBar} from "../components/NavigationBar";
import {useState} from "react";
import {Display} from "../components/Display";
import {KeyPad} from "../components/KeyPad";

export const Calculator = () => {
    const [input, setInput] = useState("")
    const handleButtonClick = (value) => {
        setInput(input + value)
        if (value === "CE") {
            setInput("")
        }

    }

    return (
        <div>
            <div>
            <NavigationBar/>
            </div>
            <div>
                <Display input={input}/>
                <KeyPad onButtonClick={handleButtonClick}/>
            </div>
        </div>







    )
}