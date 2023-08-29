import {useState} from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";

const MultipleCounter = () => {
    const [size, setSize] = useState(0);

    const onSizeChange = (inputSize) => {
        setSize(inputSize);
    };

    return (
        <div>
            <CounterSizeGenerator onSizeChange={onSizeChange}/>
            <CounterGroup size={size}/>
        </div>
    )
}
export default MultipleCounter;