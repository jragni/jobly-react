import React from "react";
import SearchForm from "../forms/SearchForm";
import JobsList from "../job/JobsList";

/** Jobs
 * 
 * Props:
 * 
 * State:
 * 
 * Routes -> Jobs -> JobsList
 */
function Jobs(props){

    //FOR DEV
    let jobs = [{}]; // TODO: add jobs for test
    //END DEV

    // TODO: add api call for submit button;
    // Handles the submit for searching for jobs
    function submit() {
        //API GOES here
    }

    return (
        <div className="Jobs">
            <SearchForm submit={submit}/>
            <JobsList jobs={jobs}/>
        </div>
    )
}

export default Jobs;