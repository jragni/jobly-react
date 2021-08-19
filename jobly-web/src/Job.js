import React from "react";
import addCommas from "./helper/addCommas";

/** Job
 *
 * Props:
 *
 * State:
 *
 * JobList -> Job
 */

function Job({ job }) {
  const { title, salary, equity, companyName } = job;
  return (
    <div className="Job card">
      <div className="card-header">
        <h5> {title} </h5>
        <h6> {companyName}</h6>
      </div>
      <div className="card-body">
        <p className="card-text">
          Salary: {salary ? addCommas(+salary) : "unpaid"}
        </p>
        <p className="card-text">Equity: {equity || "none"}</p>
      </div>
    </div>
  );
}

export default Job;
