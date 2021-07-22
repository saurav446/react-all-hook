// import React, { createContext, useReducer } from 'react';
// import ConpoA from './ConpoA';
// import ConpoB from './ConpoB';
// import ConpoC from './ConpoC';


// export const  Allcontent = createContext()
// const Mian = () => {
//     const init = 0;
//     const  reducer = (state,action) => {
//         switch(action){
//            case 'increment' :  
//              return state + 1
//              case 'decrement' :  
//                return state - 1
//                case 'rest' :  
//                  return init
//              default :     
//         }
//     }
//    const [count,dispatch] = useReducer(reducer,init)
//     return (
//         <div>
//              <h1>add cart: {count}</h1>
//             <Allcontent.Provider
//              value={{Counter:count,Counterdispatch: dispatch}}>
//                 <ConpoA />
//                 <ConpoB />
//                 <ConpoC />
//             </Allcontent.Provider>
//         </div>
//     );
// };

// export default Mian;