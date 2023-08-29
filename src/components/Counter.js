import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrease = () => {
        setCount(count + 1);
    }

    const onDecrease = () => {
        setCount(count - 1);
    }
    
    return <div>
        <button onClick={onDecrease}>-</button>
        <span>{count}</span>
        <button onClick={onIncrease}>+</button>
    </div>
}

export default Counter;