import React, { useEffect, useState } from 'react';

const TIme = () => {
    const [count,setCount] = useState(0)
     
    const tick = () =>{
        setCount(count + 1)
    }
   useEffect(() =>{
    //    function 1 name 2 milisecond 
       const intreval = setInterval(tick ,1000)
       return () =>{
        // clear korbe 
        clearInterval(intreval)
       }
   },[count])

    return (
        <div>
            <h1>time:{count}</h1>
           

        </div>
    );
};

export default TIme;