import {useState} from "react";

export const HelloWorld = (props) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <p>Like Count {count}</p>
            <button onClick={
                () => {
                    setCount(count+1)
                }
            }>
                Give Like

            </button>
        </div>
    )

};