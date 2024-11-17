import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllJobsCard from './AllJobsCard';
import { useLoaderData } from 'react-router-dom';


const BrowseAllJobs = () => {
  const webDevelopmentJobs = useLoaderData();
  const [categoryJobs, setCategoryJobs] = useState(webDevelopmentJobs)

  const handelShowJobsByCategory = (category) =>{
      axios
        .get(`http://localhost:5000/allJobsByCategory?category=${category}`)
        .then((data) => setCategoryJobs(data.data))
  }
    
    return (
      <div>
        <div className="text-center">
          <h1 className="font-bold text-3xl">All Jobs Are Here!!!</h1>
        </div>

        <div className="flex  justify-center mt-10">
          <div className="join space-x-2">
            <button
              onClick={() => {
                handelShowJobsByCategory("Web Development");
              }}
              className="btn join-item"
            >
              Web Development
            </button>

            <button
              onClick={() => {
                handelShowJobsByCategory("Graphics Design");
              }}
              className="btn join-item"
            >
              Graphics Design
            </button>

            <button
              onClick={() => {
                handelShowJobsByCategory("Video Editing");
              }}
              className="btn join-item"
            >
              Video Editing
            </button>

            <button
              onClick={() => {
                handelShowJobsByCategory("Digital Marketing");
              }}
              className="btn join-item"
            >
              DIgital Marketing
            </button>

            <button
              onClick={() => {
                handelShowJobsByCategory("Ai Services");
              }}
              className="btn join-item"
            >
              AI Services
            </button>

            <button
              onClick={() => {
                handelShowJobsByCategory("Writing And Translation");
              }}
              className="btn join-item"
            >
              Writing And Translation
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 my-20 gap-10'>
          {
            categoryJobs.map(job=> <AllJobsCard job={job} key={job._id}></AllJobsCard>)
          }
        </div>
      </div>
    );
};

export default BrowseAllJobs;