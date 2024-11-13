import axios from 'axios';
import React from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateMyPostedJobModal = () => {

    const postedJob = useLoaderData()

    const navigate = useNavigate()

    

    const {_id,email, title, deadline, category, description, minimumPrice, maximumPrice} = postedJob

    const handelUpdateJob = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const description = form.description.value;
        const minimumPrice = form.minimumPrice.value;
        const maximumPrice = form.maximumPrice.value; 

         const updatedJobInfo = {
           email,
           title,
           deadline,
           category,
           description,
           minimumPrice,
           maximumPrice,
         };

         axios.put(`http://localhost:5000/updatedJob/${_id}`, updatedJobInfo)
         .then(res=>{
            if(res.data.modifiedCount===1){
                Swal.fire({
                  text: "Update The Job Successfully",
                  icon: "success",
                });
                navigate("/myPostedJobs");
            }
         })



    }
    
    return (
      <div>
        <div className="p-20 bg-[#064C71] space-y-4">
          <form onSubmit={handelUpdateJob}>
            <div className="flex flex-col lg:flex-row justify-center md:space-x-10">
              <div className="w-full md:w-1/2">
                <label className="font-bold text-lg" htmlFor="Email">
                  Email
                </label>{" "}
                <br />
                <input
                  className="w-full px-3 py-1 border border-gray-400 disabled"
                  type="email"
                  name="email"
                  value={email}
                  id=""
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="font-bold text-lg" htmlFor="title">
                  Title
                </label>{" "}
                <br />
                <input
                  className="w-full px-3 py-1 border border-gray-400"
                  type="text"
                  name="title"
                  defaultValue={title}
                  id=""
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center md:space-x-10">
              <div className="w-full md:w-1/2">
                <label className="font-bold text-lg" htmlFor="deadline">
                  Deadline
                </label>{" "}
                <br />
                <input
                  className="w-full px-3 py-1 border border-gray-400"
                  type="date"
                  name="deadline"
                  id=""
                  defaultValue={deadline}
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="font-bold text-lg" htmlFor="category">
                  Category
                </label>{" "}
                <br />
                <select
                  className="w-full px-3 py-1 border border-gray-400"
                  name="category"
                  defaultValue={category}
                >
                  <option value={"Web Development"}>Web Development</option>
                  <option value={"Graphics Design"}>Graphics Design</option>
                  <option value={"Video Editing"}>Video Editing</option>
                  <option value={"Digital Marketing"}>Digital Marketing</option>
                  <option value={"Ai Services"}>Ai Services</option>
                  <option value={"Writing And Translation"}>
                    Writing And Translation
                  </option>
                </select>
              </div>
            </div>

            <div className="">
              <label className="font-bold text-lg" htmlFor="description">
                Description
              </label>{" "}
              <br />
              <textarea
                className="w-full h-32 px-2 py-1 border border-gray-400"
                name="description"
                defaultValue={description}
                id=""
              ></textarea>
            </div>

            <div className="flex flex-col lg:flex-row justify-center md:space-x-10">
              <div className="w-full md:w-1/2">
                <label className="font-bold text-lg" htmlFor="minimumPrice">
                  Minimum Price
                </label>{" "}
                <br />
                <input
                  className="w-full px-3 py-1 border border-gray-400"
                  type="number"
                  name="minimumPrice"
                  defaultValue={minimumPrice}
                  id=""
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="font-bold text-lg" htmlFor="maximumPrice">
                  Maximum Price
                </label>{" "}
                <br />
                <input
                  className="w-full px-3 py-1 border border-gray-400"
                  type="number"
                  name="maximumPrice"
                  defaultValue={maximumPrice}
                  id=""
                />
              </div>
            </div>

            <div className="hover:cursor-pointer text-center w-full bg-[#F9128F] mt-10 px-3 py-2 rounded-lg font-bold">
              <button>Update The Job</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default UpdateMyPostedJobModal;