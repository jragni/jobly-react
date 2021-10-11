import React from "react";

function JobCard({ job, submit}) {
  const { title, salary, equity, companyHandle } = job;
  return (
    <div className="JobsCard">
      <div className="CompanyCard card bg-light container my-3 w-75">
        <div className="card-header row">
          <h4 className="card-title text-start col">{title}</h4>
        </div>
        <div className="card-body">
          <h6 className="card-text text-start">{companyHandle}</h6>
          <p className="card-text text-start">
            Salary: {salary ? salary :
            "Not Available"
              }
          </p>
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
