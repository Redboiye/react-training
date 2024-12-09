import {NavigationBar} from "../components/NavigationBar";
import {useState} from "react";
import {Display} from "../components/Display";
import {KeyPad} from "../components/KeyPad";


export const Calculator = () => {
    const [input, setInput] = useState("") //galvena funkcija kas atgriez stateful value(input) un funkcija kas to inputu atjaunina, "" default value
    const handleButtonClick = (value) => { //() funkcijas arguments, value ir tas kas atgriezas no KeyPad ka props. value ir ka arguments.

        if (value === "=") {
            if (!input || /[+\-*/]$/.test(input)) {
                return;
            }
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
        } else if (/[+\-*/]/.test(value)) {
            const lastChar = input.slice(-1)
            if (/[+\-*/]/.test(lastChar)) {
                setInput(input.slice(0, -1) + value);
            } else {
                setInput(input + value)
            }
        } else {
            setInput(input + value)
        }
    }

    const calculateResult = () => {

        try {
            const sanitizedInput = input.replace(/[+\-*/]$/, "")
            let result = eval(sanitizedInput); //eval aritmetiskas operacijas(tikai javascripta)
            setInput(result)
            console.log(result) //debugging ir atkludosana kadas vertibas un vertibas tiek padota cauri kodam ieks majas lapas consoles.
            if (result === Infinity || result === -Infinity) { //infinity var izmantot range
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

// props handleButtonClick