import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);
    console.log(arr);

    let incCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={incCount}>Increase</button>
        </div>
    );
}