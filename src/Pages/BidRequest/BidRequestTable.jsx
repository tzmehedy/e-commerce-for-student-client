import axios from 'axios';
import React from 'react';

const BidRequestTable = ({ bid, getData }) => {
  const handelStatus = async (id, previousStatus, currentStatus) => {
    const { data } = await axios.patch(
      `http://localhost:5000/updateStatus/${id}`,
      { currentStatus }
    );
    getData();
  };
  return (
    <>
      <tr className="">
        <td>
          <div className="flex items-center gap-3">
            <div>
              <div className="font-bold">{bid.title}</div>
            </div>
          </div>
        </td>
        <td>{bid.offerPrice}</td>
        <td>{bid.deadline}</td>
        <td>{bid.comments}</td>
        <td>{bid.sellerEmail}</td>
        <td>{bid.status}</td>

        <td className="space-x-2">
          <button
            onClick={() => handelStatus(bid._id, bid.status, "In Progress")}
            className="bg-green-500 font-bold px-2 py-1 rounded-md"
          >
            Accept
          </button>
          <button
            onClick={() => handelStatus(bid._id, bid.status, "Rejected")}
            className="bg-red-500 font-bold px-2 py-1 rounded-md"
          >
            reject
          </button>
        </td>
      </tr>
    </>
  );
};

export default BidRequestTable;