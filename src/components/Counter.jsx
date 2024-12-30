import { useState } from "react";


export default function Counter() {
    
    const [count, setCount] = useState(0); // [current value, change value]
    const [message, setMessage] = useState("Welcome to the class")
    const handleClick = () => {
        console.log("Clicked");
        // 1. increment count
        // 2. rerender
        setCount(count + 1);
    }
    const handleMessage = () => {
        console.log("message changed");
        setMessage("Welcome to the REACT class")
    }
    return (
      <div>
        <h1>Counter: {count}</h1>
            <button onClick={handleClick}>Increment</button>
            <p>{message}</p>
            <button onClick={handleMessage}>Change Message</button>
      </div>
    );
}