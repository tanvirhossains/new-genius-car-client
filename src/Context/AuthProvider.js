import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';



export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }
    const facebookSignIn = () => {
        return signInWithPopup(auth, provider)
    }


    const registerManaging = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginManagin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        // localStorage.removeItem('genius-token');
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            // setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    }, [])





    const item = {
        user,
        loginManagin,
        registerManaging,
        googleSignIn,
        facebookSignIn,
        logOut
    };

    return (

        <AuthContext.Provider value={item}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;