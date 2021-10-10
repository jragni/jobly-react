import React from "react";
import SearchForm from "../forms/SearchForm";
import JobsList from "../job/JobsList";

function Jobs(){
    return (
        <div className="Jobs">
            <SearchForm/>
            <JobsList />
        </div>
    )
}

export default Jobs;