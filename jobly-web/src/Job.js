import React from "react";

/** Job
 *
 * Props:
 *
 * State:
 *
 * JobList -> Job
 */

function Job({ job }) {
  const { title, salary, equity } = job;
  return (
    <div className="Job card">
      <div className="card-header">
        <h3> {title} </h3>
      </div>
      <div className="card-body">
        <p className="card-text">Salary: {salary}</p>
        <p className="card-text">Equity: {equity}</p>
      </div>
    </div>
  );
}

export default Job;
