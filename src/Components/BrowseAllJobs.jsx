import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const BrowseAllJobs = () => {
    
    return (
      <div>
        <div className="text-center">
          <h1 className="font-bold text-3xl">All Jobs Are Here!!!</h1>
        </div>

        <div className="flex  justify-center mt-10">
          <div className="join space-x-2">
            <Link to={"/"}>
              <button className="btn join-item">All</button>
            </Link>
            <Link to={"webDevelopment"}>
              <button className="btn join-item">Web Development</button>
            </Link>
            <Link to={"graphicsDesign"}>
              <button className="btn join-item">Graphics Design</button>
            </Link>
            <Link to={"videoEditing"}>
              <button className="btn join-item">Video Editing</button>
            </Link>
            <Link to={"digitalMarketing"}>
              <button className="btn join-item">DIgital Marketing</button>
            </Link>
            <Link to={"aiServices"}>
              <button className="btn join-item">AI Services</button>
            </Link>
            <Link to={"writingTranslation"}>
              <button className="btn join-item">Writing And Translation</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default BrowseAllJobs;