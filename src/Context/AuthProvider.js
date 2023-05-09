import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.init';



export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);


    const registerManaging = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginManagin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const user = { name: "tanir" }


    const item = { user, loginManagin, registerManaging };

    return (

        <AuthContext.Provider value={item}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;