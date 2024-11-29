import { useMutation } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import axios from 'axios';

const BidRequestTable = ({ bid, refetch }) => {

  console.log(bid.status)

  const axiosSecure = useAxiosSecure()

  const { mutateAsync } = useMutation({
    mutationFn: async ({id, status}) => {
      console.log(status);
      const { data } = await axiosSecure.patch(`/updateStatus/${id}`,{status})
      console.log(data)
    },
    onSuccess: () => {
      refetch();
    },
  });

  const handelReject = async (id, previousStatus, status) => {
    if (previousStatus === status) return;
    await mutateAsync({ id, status });
  };


  const handelAccept = async(id)=>{
    const { data } = await axios.post("http://localhost:5000/order",{id})
    window.location.replace(data.url)

  }
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
            disabled={bid.status === "Complete"}
            onClick={() => handelAccept(bid._id)}
            className="bg-green-500 font-bold px-2 py-1 rounded-md"
          >
            Accept
          </button>
          <button
            disabled={bid.status === "Complete"}
            onClick={() => handelReject(bid._id, bid.status, "Rejected")}
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