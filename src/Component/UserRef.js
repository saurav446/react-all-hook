import React, { useRef } from 'react';

const UserRef = () => {

    const input = useRef();
  
     const click = () =>{
         input.current.value = '1000'
         input.current.style.color = 'red';
     }
    return (
        <div>
            
            <input type="text"  ref={input} />
            <button onClick={click}>Button</button>
        </div>
    );
};

export default UserRef;