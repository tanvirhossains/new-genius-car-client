import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase.init';



export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // update profile
    const profileUpdate = (name, urlPhoto) => {

        return updateProfile(auth.currentUser, { displayName: name, photoURL: urlPhoto })

    }

    // google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    //facebook sign in
    const facebookSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    //create new user with email
    const registerManaging = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // sign in a user 
    const loginManagin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // log out use 
    const logOut = () => {
        // localStorage.removeItem('genius-token');
        return signOut(auth);
    }



    // get current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            // setLoading(false);
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [])





    const item = {
        user,
        profileUpdate,
        loginManagin,
        registerManaging,
        googleSignIn,
        facebookSignIn,
        logOut,
        loading
    };

    return (

        <AuthContext.Provider value={item}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;