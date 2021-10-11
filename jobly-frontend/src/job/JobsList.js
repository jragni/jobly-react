import React from "react";
import JobCard from "./JobCard";

function JobsList({jobs}) {
    return (
        <div className="JobsList">
            {jobs.map( job => (
                <JobCard job={job} />
            ))}
        </div>
    )
}

export default JobsList;