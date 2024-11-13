import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BidRequestTable from './BidRequestTable';

const BidRequest = () => {
    const allBidsRequest = useLoaderData()
    return (
      <div className='my-20'>
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
              {allBidsRequest.map((bid) => (
                <BidRequestTable
                  bid={bid}
                ></BidRequestTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default BidRequest;