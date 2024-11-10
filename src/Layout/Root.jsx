import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
      <div>
        <div className="min-h-[calc(100vh-308px)] md:min-h-[calc(100vh-460px)]">
          <NavBar></NavBar>
        </div>

        <div className="container mx-auto">
          <Outlet></Outlet>
        </div>

        <div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Root;