import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import MyPostedJobsTable from './MyPostedJobsTable';

const MyPostedJobs = () => {

    const {user} = useContext(AuthContext)
    const [data, setData] = useState()
    const [myPostedJobsData, setMyPostedJobsData] = useState(data);

    

    useEffect(()=>{
        const myPostedJobs = async() =>{
           await axios
             .get(`http://localhost:5000/myPostedJobs/${user.email}`)
             .then((res) => setData(res.data));
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