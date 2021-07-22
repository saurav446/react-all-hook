import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
 
 
  const init = {
      loading: true,
      user: {},
      error: ''
  }

  const reducer = (state,action) =>{
       switch(action.type) {
          case 'Success' :
              return{
                  loading:false,
                  user: action.payload,
                  error: ''
              }
         case 'Failed' :
             return{
                 loading: false,
                 user:{},
                 error:'failed to show data'
             }
           default :
           return state  
       }
  }

const DataFetchTow = () => {
    
     const [state,dispatch] = useReducer(reducer,init)
     useEffect(() =>{
         axios.get('https://jsonplaceholder.typicode.com/posts/1')
         .then((res) =>{
            dispatch({type: 'Success',payload: res.data})
         }).catch((err) =>{
            dispatch({type:'Failed'})
         })
     })
    return (
        <div>
            <p>data</p>
            {state.loading ? 'loading...' : state.user.title}

            {state.error ? state.error : null}
        </div>
    );
};

export default DataFetchTow;