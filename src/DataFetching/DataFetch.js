 import React, { useEffect, useState } from 'react';
 import axios from 'axios';

const DataFetch = () => {
    
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('')
   
    const [user,setUser] = useState({})
 
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            setLoading(false)
            setError('') 
            setUser(res.data) 
        }).catch(error => {
            setUser({})
            setLoading(false)
            setError('this is loading failed')
        })
    },[])
    

    return (
        <div>
            
            {loading ? "loading..." :  user.title}
            {error ? error : null} 
        </div>
    );
};

export default DataFetch;