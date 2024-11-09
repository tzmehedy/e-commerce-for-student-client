import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
      <div>
        <div className="min-h-[calc(100vh-380px)] md:min-h-[calc(100vh-520px)]">
          <NavBar></NavBar>
        </div>

        <div className="container md:mx-auto mx-4">
          <Outlet></Outlet>
        </div>

        <div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Root;