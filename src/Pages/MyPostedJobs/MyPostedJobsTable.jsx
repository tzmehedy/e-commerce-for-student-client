import React from 'react';

const MyPostedJobsTable = ({job}) => {
    const {title, description, deadline, minimumPrice, maximumPrice} = job

   
    return (
        <tr>
          <td>
            <div className="flex items-center gap-3">
              <div>
                <div className="font-bold">{title}</div>
              </div>
            </div>
          </td>
          <td>{description.substring(0,40)}...</td>
          <td>{deadline}</td>
          <td>{minimumPrice}</td>
          <td>{maximumPrice}</td>

          <td>
            <button className="btn">Update</button>
            <button className="btn">Edit</button>
          </td>
        </tr>
     
    );
};

export default MyPostedJobsTable;