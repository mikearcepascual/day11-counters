import {useState} from "react"

const CounterSizeGenerator = (props) => {
    const [size, setSize] = useState(0);

    const onInputChange = (event) => {
        const inputSize = parseInt(event.target.value);
        setSize(inputSize)
        props.onSizeChange(inputSize);
    }

    return (
    <div>
        <input type="number" min={0} value={size} onChange={onInputChange}/>
    </div>
    )
}

export default CounterSizeGenerator;