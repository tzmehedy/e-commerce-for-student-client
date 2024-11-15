import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext)
    console.log(auth)
    return auth
};

export default useAuth;