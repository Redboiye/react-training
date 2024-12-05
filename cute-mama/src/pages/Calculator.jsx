import {NavigationBar} from "../components/NavigationBar";
import {useState} from "react";
import {Display} from "../components/Display";
import {KeyPad} from "../components/KeyPad";


export const Calculator = () => {
    const [input, setInput] = useState("")
    const handleButtonClick = (value) => {

        if (value === "=") {
            calculateResult();
        } else if (value === "CE") {
            setInput("")
        } else if (value === "C") {
            setInput(input.slice(0, -1));
        } else if (value === ".") {
            const numbers = input.split(/[\+\-\*\/]/);
            console.log(numbers);
            const currentNumber = numbers[numbers.length - 1];
            if (currentNumber.includes(".")) {
                return;
            } else {
                setInput(input + value)
            }

        }else if (/[+\-*/]/.test(value)) {
            const lastChar = input.slice(-1)
            if (/[+\-*/]/.test(lastChar)) {
                setInput(input.slice(0, -1) + value);
            } else {
                setInput(input + value)
            }
        }
        else {
            setInput(input + value)
        }
    }

    const calculateResult = () => {
        try {

            let result = eval(input);
            setInput(result)
            console.log(result)
            if (result === Infinity || result === -Infinity) {
                setInput("Cannot divide by zero")
            }
        } catch (error) {
            setInput("ERROR");
        }

    };


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