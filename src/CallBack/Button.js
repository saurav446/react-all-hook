import React, { memo } from 'react';

const Button = ({text,handleClick}) => {
    console.log(`Render'${text}`)
    return (
        <div>
            <button onClick={() => handleClick()}>
                 Increment
            </button>
        </div>
    );
};

export default memo(Button);