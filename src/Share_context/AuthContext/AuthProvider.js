import { createContext, useState } from "react";
import {getAuth} from 'firebase/auth'
import {app} from '../../components/firebase/firebaseConfiguer'

const AuthContext = createContext();

const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;