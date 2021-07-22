import React, { useContext } from 'react';
import {NewContext, UserContext} from './App'

const Webdev = () => {
    const user = useContext(UserContext)
    const users = useContext(NewContext)
    
  
export const UserContext = createContext()

export const NewContext = createContext()
    return (
        <div>
             <UserContext.Provider value={"saurav"}>
      <NewContext.Provider value={"raju"}>
          <Webdev />
          
      </NewContext.Provider>
      </UserContext.Provider> 
            {/* <UserContext.Consumer>

                {
                    user =>  {return (
                            
                     <NewContext.Consumer>
                        {
                            users => {
                                return(
                                    <div>User Context Value :{user} <br/>
                                    User Context Value: {users}</div>
                                )
                            }
                        }
                     </NewContext.Consumer>
                    )}  
                }
            </UserContext.Consumer> */}

      <div>User Context Value :{user} <br/>
     User Context Value :   {users}  </div> 
        </div>
    );
};

export default Webdev;