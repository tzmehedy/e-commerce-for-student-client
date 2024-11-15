import React from 'react';
import { Link } from 'react-router-dom';

const CarouselSlide = ({image, text}) => {
    return (
      <div
        className="w-full bg-center bg-cover h-[26rem] mt-10 p-10"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40  ">
          <div className=" flex flex-col justify-center items-center text-center space-y-5 ">
            <h1 className="text-sm font-semibold text-[#26E13F] lg:text-4xl">
              {text}
            </h1>
            <button>
              <Link
                to={"/addJobs"}
                className="w-full px-5 py-2  font-bold text-[#00546c]  bg-[#F9128F] rounded-md "
              >
                Add Job
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default CarouselSlide;