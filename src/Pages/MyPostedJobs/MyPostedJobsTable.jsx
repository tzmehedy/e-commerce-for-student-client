import axios from 'axios';
import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const MyPostedJobsTable = ({ job, myPostedJobsData, setMyPostedJobsData }) => {
  const { _id, title, description, deadline, minimumPrice, maximumPrice } = job;

  const handelDeleteTheJob = async () => {
    axios.delete(`http://localhost:5000/myPostedJobs/${_id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        const remainingPostedJobs = myPostedJobsData.filter(
          (myPostedJobData) => myPostedJobData._id !== _id);
        setMyPostedJobsData(remainingPostedJobs)
      }
    });
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td>{description.substring(0, 40)}...</td>
      <td>{deadline}</td>
      <td>{minimumPrice}</td>
      <td>{maximumPrice}</td>

      <td className="space-x-2">
        <button onClick={handelDeleteTheJob} className="text-xl">
          <MdDelete />
        </button>
        <button className="text-xl">
          <FaRegEdit />
        </button>
      </td>
    </tr>
  );
};

export default MyPostedJobsTable;