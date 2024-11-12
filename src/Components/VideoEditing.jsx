import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllJobsCard from './AllJobsCard';

const VideoEditing = () => {
   const jobs = useLoaderData();
   return (
     <div className="grid grid-cols-1 md:grid-cols-3 my-10">
       {jobs.map((job) => (
         <AllJobsCard job={job} key={job._id}></AllJobsCard>
       ))}
     </div>
   );
};

export default VideoEditing;