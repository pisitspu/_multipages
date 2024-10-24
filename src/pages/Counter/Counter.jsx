import { useState } from 'react';
import './Counter.css';

function Counter(props) {
    

    let name = props.name

    const [value, setValue] = useState(props.value || 0)

    function increment() {
        setValue(value + 1)
        console.log(value)
    }

    function decrement() {
        setValue(value - 1)
        console.log(value)
    }

    return (

        <div className = "counter-container" >

             <h3 className='title'>{name || 'Counter'}</h3>
            <button className='btn btn-danger' 
            onClick={decrement} >-</button>
            <span className='value'>{value}</span>
            <button className='btn btn-success'
             onClick={increment}>+</button>

        </div>
         
    )
}

export default Counter;
