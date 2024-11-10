import React from 'react';
import logo from '../assets/images/Logo (2).png'
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    const navLinks = (
      <>
        <li className='mr-2'>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className='mr-2'>
          <NavLink to={'/about'}>About</NavLink>
        </li>

        
      </>
    );
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
          <Link
            to={"/login"}
            className="btn bg-[#F9128F] text-[#00546c] font-bold"
          >
            Login
          </Link>
        </div>
      </div>
    );
};

export default NavBar;