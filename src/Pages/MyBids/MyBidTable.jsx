import React from 'react';

const MyBidTable = ({bid}) => {
    return (
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
        <td>{bid.buyerEmail}</td>
        <td>{bid.status}</td>

        <td className="space-x-2">
          <button className="bg-green-500 font-bold px-2 py-1 rounded-md">
            complete
          </button>
          
        </td>
      </tr>
    );
};

export default MyBidTable;