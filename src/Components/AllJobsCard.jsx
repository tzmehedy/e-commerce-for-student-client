import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const AllJobsCard = ({job}) => {

  console.log(job)
    const {title, deadline, minimumPrice, maximumPrice,email, _id} = job
    return (
      <div className="shadow-2xl p-10 space-y-5 max-h-72 relative">
        <h1 className="font-bold shrink">{title}</h1>
        <p>Deadline: {deadline}</p>
        <p>
          Price: ${minimumPrice} - ${maximumPrice}
        </p>
        <div className="text-end absolute right-5 bottom-5">
          <Link to={`/jobDetails/${_id}`}>
            <button className="btn bg-[#F9128F] font-bold">Bid Now</button>
          </Link>
        </div>
      </div>
    );
};

export default AllJobsCard;