import React, {useEffect, useState } from 'react';
import axios from 'axios';
import MyPostedJobsTable from './MyPostedJobsTable';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyPostedJobs = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()
  const [myPostedJobsData, setMyPostedJobsData] = useState()

  
    useEffect(()=>{
        const myPostedJobs = async() =>{
           await axiosSecure
             .get(`/myPostedJobs/${user.email}`)
             .then((res) => setMyPostedJobsData(res.data));
        }
        myPostedJobs()
    },[])

    return (
      <div className="my-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Minimum Price</th>
                <th>Maximum Price</th>
                <th>Edit</th>
              </tr>
            </thead>

            <tbody>
              {myPostedJobsData?.map((job) => (
                <MyPostedJobsTable
                  job={job}
                  myPostedJobsData={myPostedJobsData}
                  setMyPostedJobsData={setMyPostedJobsData}
                  key={job._id}
                ></MyPostedJobsTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyPostedJobs;