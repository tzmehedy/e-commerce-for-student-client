import React, { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const JobDetails = () => {
    const jobInfo = useLoaderData()
    const navigate = useNavigate()

    const {user} = useContext(AuthContext)

    const { title, deadline, description, minimumPrice, maximumPrice, email, _id } = jobInfo

    const handelPlaceTheBid = (e)=>{
        e.preventDefault()
        if(user?.email === email) {
          return Swal.fire({
            title: "Error",
            text: "Not Permitted for the bid",
            icon: "error",
          });
        }
        const form = e.target 
        const sellerEmail = user?.email 
        const title = form.title.value 
        const offerPrice = form.price.value 
        const deadline = form.deadline.value 
        const comments = form.comments.value 
        const buyerEmail = email 
        const status = "pending"


        if( parseInt(offerPrice)< parseInt(minimumPrice)){
          return Swal.fire({
            title: "Error",
            text: "The price will be grater than or equal Minimum price",
            icon: "error",
          });

        }



        const bidInfo = {
          sellerEmail,
          title,
          offerPrice,
          deadline,
          comments,
          status,
          buyerEmail,
        };

        axios.post("http://localhost:5000/allBids", bidInfo)
        .then(res=>{
          Swal.fire({
            title: "Success",
            text: "Successfully Place your bid",
            icon: "Success",
          });

          navigate("/")

        })

        
    }

    return (
      <div className="flex shadow-2xl my-20 p-10 md:space-x-10">
        {/* Job Details */}
        <div className="w-full md:w-1/2 space-y-5">
          <h1 className="font-bold text-3xl">{title}</h1>
          <p className="text-justify">{description}</p>
          <p>Deadline: {deadline}</p>
          <p>
            Price: ${minimumPrice} - ${maximumPrice}
          </p>
          <p>Buyer Email: {email}</p>
        </div>

        {/* Place a bid */}
        <div className="w-full md:w-1/2 space-y-5">
          <h1 className="font-bold text-xl">Place Your Bid</h1>
          <hr />

          <form onSubmit={handelPlaceTheBid} className="space-y-6">
            <div className="flex space-x-10">
              <div>
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  id=""
                  className="disabled w-full border border-gray-400 px-2 py-1"
                />
              </div>
              <div>
                <label htmlFor="Name">Title</label>
                <input
                  type="text"
                  name="title"
                  id=""
                  value={title}
                  className="w-full border border-gray-400 px-2 py-1"
                />
              </div>
            </div>
            <div className="flex space-x-10">
              <div>
                <label htmlFor="Price">Price</label>
                <input
                  type="text"
                  name="price"
                  id=""
                  className="w-full border border-gray-400 px-2 py-1"
                />
              </div>
              <div>
                <label htmlFor="deadline">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  id=""
                  className="w-full border border-gray-400 px-2 py-1"
                />
              </div>
            </div>
            <div className="">
              <div className="w-full">
                <label htmlFor="Price">Comments</label> <br />
                <textarea
                  name="comments"
                  className="w-full border border-gray-400 px-2 py-1"
                  id=""
                ></textarea>
              </div>
            </div>

            <div className='text-end'>
              <button className="btn bg-[#F9128F] font-bold">Place Bid</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default JobDetails;