import React from "react";
import JobCard from "./JobCard";

/** JobsList
 * List of job cards 
 * 
 * Props: 
 *      jobs --- List of jobs  
 * 
 * State: 
 *       -No State
 * 
 * {Jobs,CompanyDetails} -> JobList -> JobCard
 */

function JobsList({jobs, submit}) {
    return (
        <div className="JobsList">
            {jobs.map( job => (
                <JobCard key={job.id} job={job} submit={submit}/>
            ))}
        </div>
    )
}

export default JobsList;