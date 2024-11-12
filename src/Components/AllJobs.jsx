import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllJobsCard from './AllJobsCard';

const AllJobs = () => {
    const allJobsInfo = useLoaderData()
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-10'>
            {
               allJobsInfo.map(job=> <AllJobsCard job={job} key={job._id}></AllJobsCard>) 
            }
        </div>
    );
};

export default AllJobs;