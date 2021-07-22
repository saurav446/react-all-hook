import React, { useState } from 'react';

const Counter = () => {
    const init = 0;

    const [count,setCount] = useState(init)

    const incre = () =>{
        setCount(count + 1)
    }
    const decre = () =>{
        setCount(count - 1)
    }
    const FiveIncre  = () =>{
        for(let i = 0; i < 5; i++){
          setCount(count => count + 1)
        }
    } 
    return (
        <div>
            <p>counter -{count}</p>
            <button onClick={incre}>incre</button>
            <button onClick={decre}>decre</button>
            <button onClick={() => setCount(init)}>reset</button>
            <button onClick={FiveIncre}>Fiver incre</button>
        </div>
    );
};

export default Counter;