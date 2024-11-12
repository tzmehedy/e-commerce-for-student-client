import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

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


    console.log(user)


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