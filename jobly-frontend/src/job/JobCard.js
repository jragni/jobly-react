import React from "react";

function JobCard({ job, submit}) {
  const { title, salary, equity, companyHandle } = job;
  return (
    <div className="JobsCard">
      {/* TODO: Add Title  */}
      {/* company name */}
      {/* salary */}
      {/* equity */}
      {/* APply button */}
      <div className="CompanyCard card bg-light container my-3 w-75">
        <div className="card-header row">
          <h2 className="card-title text-start col">{title}</h2>
        </div>
        <div className="card-body">
          <h3 className="card-text text-start">{companyHandle}</h3>
          <p className="card-text text-start">Salary: ${salary}</p>
          {equity 
          ? <p className="card-text text-start">Equity: {equity}</p>
          : <p className="card-text text-start">Equity: 0</p>}
          {/* TODO: handle button submit*/}
          <button className='btn btn-md btn-warning my-0'> Apply</button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
