import React from "react";
import Job from "./Job";

/** JobList
 * Lists the job cards
 *
 * Props:
 * -jobList --- job list from api passed from Jobs
 *
 * States:
 * - NONE
 *
 * {CompanyDetail, Jobs} -> JobList -> Jobs
 */
function JobList({ jobsList }) {
  return (
    <ul className="Jobslist">
      {jobsList && jobsList.length > 0
        ? jobsList.map((j) => (
            <li key={j.id}>
              <Job key={j.id} job={j} />
            </li>
          ))
        : "No jobs available at this time."}
    </ul>
  );
}

export default JobList;
