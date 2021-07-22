import React, { useState } from 'react';
import Move from './Move';

const Toggle = () => {
    const [display,setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}> Toggle</button>
            {display  &&  <Move></Move>}
        </div>
    );
};

export default Toggle;