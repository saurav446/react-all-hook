import React, { useReducer } from 'react';

const CountTow = () => {
    const init = {
      first :0
    };

    const  reducer = (state,action) => {
         switch(action.type){
           case 'five' :
             return {first: state.first + action.value}
            case 'increment' :  
              return {first: state.first + 1}
              case 'decrement' :  
                return {first: state.first - 1}
                case 'rest' :  
                  return init
              default :   
                  return state
         }
     } 
     const [count, dispatch] = useReducer(reducer,init) 
    return (
        <div>
             <h1>connt - {count.first}</h1> 
             <button onClick={() => dispatch({type: 'five',value:5})} >five</button>
             <button onClick={() => dispatch({type: 'increment'})} >Increment</button>
             <button  onClick={() => dispatch({type: 'decrement'})} >Decrement</button>
             <button onClick={() => dispatch({type: 'rest'})} >Reset</button>
   

        </div>
    );
};

export default CountTow;