import Counter from "./Counter";

const CounterGroup = (props) => {
    const counters = new Array(props.size).fill();
    return counters.map((_, index) => {
        return <Counter key={index}/>
    })
}

export default CounterGroup;