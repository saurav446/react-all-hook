import React, { useContext } from 'react';
import { Allcontent } from './Mian';

const ConpoA = () => {
    const useAll = useContext(Allcontent)
    return (
        <div>
            
            <p>value change: {useAll.Counter}</p>
            <button onClick={() => useAll.Counterdispatch('increment')} >Increment</button>
            <button  onClick={() => useAll.Counterdispatch('decrement')} >Decrement</button>
            <button onClick={() => useAll.Counterdispatch('rest')} >Reset</button>
        </div>
    );
};

export default ConpoA;