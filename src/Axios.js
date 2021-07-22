import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Axios = () => {
    const [user,setUser] = useState([])
    const [id,setId] = useState(1)
    const [idUpdata,setUpdata] = useState()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idUpdata}`)
        .then(res => {
            console.log(res.data)
            // const raju = res.data;
            // const saurav = raju.slice(0,5);
            setUser(res.data)
        }).catch(err =>  {
            console.log(err)
        })
    },[idUpdata])
     
    const handleClick = () =>{
        setUpdata(id)
    }
 

    return (
        <div>
            <input type="text" value={id}
             onChange={(e)=> setId(e.target.value)}  />

             <button onClick={handleClick} >Updata Post</button>

             <p>{user.title}</p>
            {/* { user.map(post => ( <li key={post.id}>{post.title}</li>  ))   } */}
        </div>
    );
};

export default Axios;