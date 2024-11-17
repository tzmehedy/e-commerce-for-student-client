import React, { useContext, useState } from 'react';
import logo from '../assets/images/Logo (2).png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { RxAvatar } from 'react-icons/rx';


const NavBar = () => {
 const {user, logOut} = useContext(AuthContext)
 const navigate = useNavigate()
 const [userRole, setUserRole] = useState(true)
    const navLinks = (
      <>
        <li className='mr-2'>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className='mr-2'>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li className='mr-2'>
          <NavLink to={'/allJobs'}>All Jobs</NavLink>
        </li>

        

        {
          user && userRole !== true ? <li className='mr-2'>
          <NavLink to={'/my-Bids'}>My Bids</NavLink>
        </li> : ""
        }
        {
          user && userRole === true ? <><li className='mr-2'>
          <NavLink to={'/addJobs'}>Add Jobs</NavLink>
        </li>
        <li className='mr-2'>
          <NavLink to={'/myPostedJobs'}>My Posted Jobs</NavLink>
        </li>
        <li className='mr-2'>
          <NavLink to={"/bidRequest"}>Bid Request</NavLink>
        </li></> : ""
        }
        
        
      </>
    );

    const handelLogout = () =>{
      logOut()
      .then(result=>{
        Swal.fire({
          text: "LogOut Successfully",
          icon: "success",
        })
      })
      .catch(error=>{
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
        });
      })
    }
    return (
      <div className="navbar bg-base-100 fixed z-30 shadow-lg ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#F9128F] rounded-box z-[1] mt-3 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <img className="h-28 w-36" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {
            user ? <button onClick={()=>{
              navigate("/")
              setUserRole(!userRole)
            }} className='mr-2 underline'>
            {
              userRole ? "Switch to selling" : "Switch to buying"
            }
            </button> : ""
          }
          {user ? (
            <div className="flex items-center space-x-2">
              {/* <img src={user.photoURL ? user.photoURL : <RxAvatar />} alt="" /> */}
              {user.photoURL ? (
                <button>
                  <img className="w-10 h-10" src={user.photoURL} alt="" />
                </button>
              ) : (
                <button>
                  <RxAvatar className="w-10 h-10 text-[#F9128F]" />
                </button>
              )}
              <button
                onClick={handelLogout}
                className="btn bg-[#F9128F] text-[#00546c] font-bold"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-[#F9128F] text-[#00546c] font-bold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    );
};

export default NavBar;