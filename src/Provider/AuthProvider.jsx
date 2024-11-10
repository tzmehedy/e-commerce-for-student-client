import React, { createContext, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


export const AuthContext = createContext()

const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)



    const userWithEmailPass = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const loginWithGoogle = () =>{
        return signInWithPopup(auth, provider);
    }


    const info = {
      user,
      loginWithGoogle,
      userWithEmailPass,
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