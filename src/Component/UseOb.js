import React, { useState } from 'react';

const UseOb = () => {
     
    const [name,setName] = useState('')
    const [user,setUser] = useState([])

    const clik = () =>{
      const   ob = {
            name:name
        }
        setUser([...user,ob])
    }
    return (
        <div>
            <p>Object</p>
           <input type="text" value={name} 
           onChange={(e) => setName(e.target.value)} />
           <button onClick={clik}>button</button>
            {
                user.map((p,index) =>(
                    <li key={index}>{p.name}</li>
                ))
            }
        </div>
    );
};

export default UseOb;