import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';


const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials:true
});

const useAxiosSecure = () => {

  const {logOut} = useAuth()
  const navigate = useNavigate()

    axiosSecure.interceptors.response.use((res)=>{
        return res

    } , (err)=>{

      if(err.response.status === 401 || err.response.status === 403){
        logOut()
        navigate("/login")
      }
        

    })
    return axiosSecure
};

export default useAxiosSecure;