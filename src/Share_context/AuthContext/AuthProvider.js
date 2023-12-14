import React, { createContext, useEffect, useState } from 'react';
import {FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { app } from '../../components/firebase/firebaseConfiguer';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({displayName: "adsd" });
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const [loding, setLoding] = useState(true);
  
  
  const register  = (email, password) =>{
    console.log("email",email);
    console.log("password",password);
    return createUserWithEmailAndPassword(auth, email, password);
  }
 
  const login = (email, pwd) => {
    // console.log(email, pwd);
   return signInWithEmailAndPassword(auth, email, pwd);
  }
const logInwithGoogle = () =>{
return signInWithPopup(auth, googleProvider);

}
const logInWhithFaccbook = () =>{
  return signInWithPopup(auth, facebookProvider);
}

  const logOut = () => {
   return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
    setUser(currentUser);
    console.log('auth state changed', currentUser);
})
return () => {
  unsubscribe();
}
  }, [])

const authInfo = {
  user,
  register,
  login,
  logOut,
  logInwithGoogle,
  logInWhithFaccbook,
  
  
};
  return (
    <AuthContext.Provider value={authInfo}>
                 {children}
     </AuthContext.Provider>
  )
}

export default AuthContextProvider;