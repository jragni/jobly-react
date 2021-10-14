import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

/**JobCard
 * Component that renderes the job card and shows the details
 *
 * Props:
 *  - job : contains details of the job like { title, salary, description, equity, companyHandle}
 *  - apply : function that allows user to apply to the job
 *
 * State:
 *
 * JobsList -> JobCard
 */
function JobCard({ job }) {
  const { id, title, salary, equity, companyHandle } = job;
  const { currentUser, applyToJob } = useContext(UserContext);
  const [application, setApplication] = useState(currentUser.applications);

  /** TODO: add a way to click on button and not refresh page */
  async function apply(e) {
    e.preventDefault();
    if (application.includes(id)) return;
    applyToJob(id);
    setApplication( a => [...a, id]);
  }

  return (
    <div className="JobsCard">
      <div className="card bg-light container my-3 w-75">
        <div className="card-header row">
          <h4 className="card-title text-start col">{title}</h4>
        </div>
        <div className="card-body">
          <h6 className="card-text text-start">{companyHandle}</h6>
          <p className="card-text text-start">
            Salary: {salary ? "$" + salary : "Not Available"}
          </p>
          {equity ? (
            <p className="card-text text-start">Equity: {equity}</p>
          ) : (
            <p className="card-text text-start">Equity: 0</p>
          )}

          <form onSubmit={apply}>
            {currentUser && application.includes(id) ? (
              <button
                type="submit"
                className="btn btn-md btn-danger my-0"
                disabled
              >
                {" "}
                Applied{" "}
              </button>
            ) : (
              <button type="submit" className="btn btn-md btn-danger my-0">
                {" "}
                Apply{" "}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
