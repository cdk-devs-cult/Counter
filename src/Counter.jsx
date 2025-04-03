import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const incCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={incCount}>Increase</button>
        </div>
    );
}