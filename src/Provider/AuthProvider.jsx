import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext()

const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const signUpWithEmailPass = (email, password) =>{
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

    const logOut = () =>{
        axios.get("http://localhost:5000/logout", {withCredentials:true});
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, user=>{
            setLoading(false)
            setUser(user)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const info = {
      user,
      loginWithGoogle,
      signUpWithEmailPass,
      loginWithEmailPassword,
      logOut,
      loading
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