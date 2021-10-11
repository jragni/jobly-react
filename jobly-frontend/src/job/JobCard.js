import React from "react";

function JobCard({ title, companyName, salary, equity }) {
  return (
    <div className="JobsCard">
      {/* TODO: Add Title  */}
      {/* company name */}
      {/* salary */}
      {/* equity */}
      {/* APply button */}
      <div className="CompanyCard card bg-light container my-3 w-75">
        <div className="card-header row">
          <h3 className="card-title text-start col">{title}</h3>
        </div>
        <div className="card-body">
          <p className="card-text text-start">{companyName}</p>
          <p className="card-text text-start">${salary}</p>
          <p className="card-text text-start">{equity}%</p>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
