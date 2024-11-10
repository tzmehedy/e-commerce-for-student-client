import React, { useContext } from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';



// text-[#26E13F]
const Login = () => {

  const {user, loginWithGoogle} = useContext(AuthContext)


  const handelLoginWithGoogle = () =>{

    loginWithGoogle()
    .then(result=>{
      console.log(result)
    })
    .catch(error=>{
      console.log(error)
    })

  }

  
    return (
      <div className="hero bg-[#064C71]  min-h-screen">
        <div className="hero-content flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-[#F9128F]">Login now!</h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#F9128F] font-bold text-[#064C71]">
                  Login
                </button>
              </div>
            </form>
            <div className="w-full text-center mb-3">
              <button onClick={handelLoginWithGoogle} className="font-bold mr-2 text-[#064C71] text-2xl">
                <FcGoogle />
              </button>
              <button className="font-bold text-blue-700 text-2xl">
                <FaFacebook />
              </button>
              <button className="font-bold text-2xl ml-2">
                <FaGithub />
              </button>
            </div>
            <div className="text-center mb-5">
              <p>
                You are don't register? Please{" "}
                <span>
                  <Link to={"/register"} className="text-[#064C71] underline">
                    Register
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;