import React from 'react';

const AllJobs = () => {
    return (
      <div className="my-20">
        <form className="flex justify-center space-x-5">
          <div>
            <select
              className="border border-gray-500 px-3 py-3 rounded-md"
              name="category"
              id=""
            >
              <option value="">Select Category</option>
              <option value="">Web Development</option>
              <option value="">Graphics Design</option>
              <option value="">Video Editing</option>
              <option value="">Digital Marketing</option>
              <option value="">Ai Services</option>
              <option value="">Writing And Translation</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              className="px-3 w-full min-w-[300px] py-3 border border-gray-500 rounded-md"
              type="text"
              name="title"
              placeholder="Job Title"
              id=""
            />
            <button className=" btn font-bold -ml-20 bg-[#F9128F]">
              Search
            </button>
          </div>

          <div>
            <select
              className="border border-gray-500 px-3 py-3 rounded-md"
              name="category"
              id=""
            >
              <option value="">Sort By Deadline</option>
              <option value="">Sort By ascending</option>
              <option value="">Sort By descending</option>
            </select>
          </div>

          <button className="btn bg-[#F9128F] font-bold">Reset</button>
        </form>
      </div>
    );
};

export default AllJobs;