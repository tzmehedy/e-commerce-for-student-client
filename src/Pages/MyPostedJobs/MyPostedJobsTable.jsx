import axios from 'axios';
import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import UpdateMyPostedJobModal from '../../Components/UpdateMyPostedJobModal';
import { Link } from 'react-router-dom';

const MyPostedJobsTable = ({ job, myPostedJobsData, setMyPostedJobsData }) => {
  const { _id, title, description, deadline, minimumPrice, maximumPrice } = job;

  const [modal,setModal] = useState(false)

  const handelDeleteTheJob = async () => {
    axios.delete(`http://localhost:5000/myPostedJobs/${_id}`).then((res) => {
      if (res.data.deletedCount === 1) {
        const remainingPostedJobs = myPostedJobsData.filter(
          (singleData) => singleData._id !== _id
        );

        console.log(remainingPostedJobs);
        setMyPostedJobsData(remainingPostedJobs);
      }
    });
  };

  
  return (
    <>
      <tr className="">
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

          <Link to={`/update/${_id}`}>
            <button className="text-xl">
              <FaRegEdit />
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default MyPostedJobsTable;