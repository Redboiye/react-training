import {useEffect, useState} from "react";
import {NavigationBar} from "../components/NavigationBar";
import '../styles/Home.css'

export const Home = (props) => {
    const [count, setCount] = useState(0)
    let emoji = null
    useEffect(() => {
        if (count === 10) {
            alert("Congrats you reached 10 likes")
        }
    }, [count]);
    useEffect(() => {
        if (count === 0) {
            document.title = "Negative is for pussies"
        }
    }, [count]);
    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const refreshCount = () => {
        setCount(0)
    }
    if (count >= 10) {
        emoji = "🤩"
    } else if (count < 10 && count >= 1) {
        emoji = "🤮"
    } else {
        emoji = "😭"
    }


    return (
        <div>
            <NavigationBar/>


            <h1>Hello {props.name}</h1>
            <p>Like Count {count}</p>
            <button onClick={incrementCount}>Give Like</button>
            <button onClick={refreshCount}>Refresh</button>

            <button onClick={decrementCount}>Take Like Back</button>

            <p style={{fontSize: "2em"}}>{emoji}</p>


        </div>
    )

};