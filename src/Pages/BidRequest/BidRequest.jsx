import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BidRequestTable from './BidRequestTable';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthProvider';

const BidRequest = () => {
    
    const {user} = useContext(AuthContext)

    const [allBidsRequest, setAllBidsRequest] = useState()

    useEffect(()=>{
      getData()
    },[user])



    const getData = async() =>{
      const { data } = await axios.get(
        `http://localhost:5000/bidRequest/${user.email}`
      );
      setAllBidsRequest(data);
    }
    return (
      <div className="my-20">
        <div className="">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Offer Price</th>
                <th>Deadline</th>
                <th>Comments</th>
                <th>Seller Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {allBidsRequest?.map((bid) => (
                <BidRequestTable
                  bid={bid}
                  getData={getData}
                ></BidRequestTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default BidRequest;