import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const MyPostedJobs = () => {

    const {user} = useContext(AuthContext)
    const [myPostedJobsData, setMyPostedJobsData] = useState()

    useEffect(()=>{
        const myPostedJobs = async() =>{
           await axios
             .get(`http://localhost:5000/myPostedJobs/${user?.email}`)
             .then((res) => setMyPostedJobsData(res.data));
        }
        myPostedJobs()
    },[])

    console.log(myPostedJobsData)
    return (
      <div className='my-20'>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Price</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">Title</div>
                    </div>
                  </div>
                </td>
                <td>
                  description
                </td>
                <td>Deadline</td>
                <td>price</td>

                <td>
                    <button className='btn'>Update</button>
                    <button className='btn'>Edit</button>
                </td>
              </tr>
            </tbody>
            
          </table>
        </div>
      </div>
    );
};

export default MyPostedJobs;