import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import MyBidTable from './MyBidTable';

const MyBids = () => {

    const { user } = useContext(AuthContext);

    const [allBidsRequest, setAllBidsRequest] = useState();

    useEffect(() => {
      getData();
    }, [user]);

    const getData = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/myBids/${user.email}`
      );
      setAllBidsRequest(data);
    };
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
                <th>Buyer Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {allBidsRequest?.map((bid) => (
                <MyBidTable bid={bid}></MyBidTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyBids;