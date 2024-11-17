import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllJobsCard from '../../Components/AllJobsCard';


const AllJobs = () => {
    const [jobs,setJobs] = useState([])

    const [itemsPerPage, setItemsPerPage] = useState(1)

    const [currentPage, setCurrentPage] = useState()

    const [count, setCount] = useState(0)

    const handelPaginationButton = (val) => {
      setCurrentPage(val + 1);
    };


    useEffect(() => {
      getData();
    }, [currentPage, itemsPerPage]);


    const getData = async() =>{
        const { data } = await axios.get(
          `http://localhost:5000/all-Jobs?page=${currentPage}&&size=${itemsPerPage}`
        );
        setJobs(data) 
    }
    

    useEffect(()=>{
        const getCountOfData = async () => {
          const { data } = await axios.get(
            "http://localhost:5000/allJobs-count"
          );
          setCount(data.count);
        }
        getCountOfData()
    },[])


    const numberOfPages = Math.ceil(count/itemsPerPage)

    const pages = [...Array(numberOfPages).keys()];


    

   

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

        <div className="grid grid-cols-1  md:grid-cols-3 mt-10 gap-10">
          {jobs.map((job) => (
            <AllJobsCard job={job} key={job._id}></AllJobsCard>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center space-x-2">
          <button className="btn"> Previous</button>

          {pages.map((page) => (
            <button key={page} onClick={()=>{handelPaginationButton(page)}} className="btn">{page + 1}</button>
          ))}

          <button className="btn"> Next</button>
        </div>
      </div>
    );
};

export default AllJobs;