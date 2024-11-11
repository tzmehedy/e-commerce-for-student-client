import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext()

const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const userWithEmailPass = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const loginWithEmailPassword = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setLoading(false)
            setUser(currentUser)
        })
        return unSubscribe()
    },[])


    const info = {
      user,
      loginWithGoogle,
      userWithEmailPass,
      loginWithEmailPassword,
    };
    return (
        <AuthContext.Provider value={info}>
            {
                children
            }     
        </AuthContext.Provider>
    );
};

export default AuthProvider;