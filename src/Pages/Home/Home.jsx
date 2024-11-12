import React from 'react';
import Banner from '../../Components/Banner';
import Services from '../../Components/Services';
import BrowseAllJobs from '../../Components/BrowseAllJobs';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BrowseAllJobs></BrowseAllJobs>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;