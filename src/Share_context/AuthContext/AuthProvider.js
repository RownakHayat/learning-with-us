// import { createContext, Component } from "react";
// // import {getAuth} from 'firebase/auth'
// // import {app} from '../../components/firebase/firebaseConfiguer'

// export const AuthContext = createContext();

// // const auth = getAuth(app);

// class AuthContextProvider extends Component {
//     state = {
//         isAuthenticated: false
//     }
//     toggleAuth = () => {
//         this.setState({ isAuthenticated: !this.state.isAuthenticated });
//     }

//     render() {
//         return (
//             <AuthContext.Provider value={{ ...this.sate, toggleAuth: this.toggleAuth }}>
//                 {this.props.children}
//             </AuthContext.Provider>
//         );
//     }
// }

// export default AuthContextProvider;



import React, { createContext, useState } from 'react';
import {getAuth} from 'firebase/auth';
import {app} from '../../components/firebase/firebaseConfiguer';

export const AuthContext = createContext();


const AuthContextProvider = ({children}) => {
    const auth = getAuth(app);
 
  return (
    <AuthContext.Provider value={{ auth }}>
                 {children}
     </AuthContext.Provider>
  )
}

export default AuthContextProvider