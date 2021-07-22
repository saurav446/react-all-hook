import React, { useReducer } from 'react';

const Counter = () => {
    const init =0;

    const  reducer = (state,action) => {
         switch(action){
            case 'increment' :  
              return state + 1
              case 'decrement' :  
                return state - 1
                case 'rest' :  
                  return init
              default :
                
         }
     }
 

     const [count, dispatch] = useReducer(reducer,init)
     const [countTow, dispatchTow] = useReducer(reducer,init)
     
    return (
        <div>
            <h1>connt - {count}</h1> 
            <button onClick={() => dispatch('increment')} >Increment</button>
            <button  onClick={() => dispatch('decrement')} >Decrement</button>
            <button onClick={() => dispatch('rest')} >Reset</button>

 
            <h1>connt - {countTow}</h1> 
            <button onClick={() => dispatchTow('increment')} >Increment</button>
            <button  onClick={() => dispatchTow('decrement')} >Decrement</button>
            <button onClick={() => dispatchTow('rest')} >Reset</button>
        </div>
    );
};

export default Counter;