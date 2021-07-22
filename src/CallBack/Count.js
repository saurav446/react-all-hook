import React, { useCallback, useEffect, useState } from 'react'; 
import Button from './Button';

const Count = () => {
    const [id,setId] = useState(0)
    const [count,setCount] = useState(0)

    const idClick =  useCallback(() => {
        setId(id + 1)
    },[id])
    const countClick =  useCallback(()  => { 
        setCount(count + 1)
    },[count])

    return (
        <div>  
            <p>ID: {id}</p>
            <p>Counter: {count}</p>
            <Button text="Id" handleClick={idClick}></Button> 
            <Button text="Counter" handleClick={countClick}></Button>
        </div>
    );
};

export default Count;