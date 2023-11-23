import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {app} from '../../components/firebase/firebaseConfiguer';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  console.log(user);
  
  const register =(email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  };
 
const authInfo ={
register,

};
  return (
    <AuthContext.Provider value={authInfo}>
                 {children}
     </AuthContext.Provider>
  )
}

export default AuthContextProvider