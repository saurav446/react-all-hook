import React, { useEffect, useState } from 'react';

const Move = () => {
    
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
     
   const chageValue = (e) =>{
       setX(e.x)
       setY(e.y)
   }
   useEffect(() => {
     window.addEventListener('mousemove',chageValue)

    return() =>{ 
     window.removeEventListener('mousemove',chageValue)
    } 
   })
    return (
        <div>   
           
           Hook X - {x} Y - {y}
        </div>
    );
};

export default Move;