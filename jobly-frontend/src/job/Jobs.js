import React, { useState, useEffect } from "react";
import SearchForm from "../forms/SearchForm";
import JobsList from "../job/JobsList";
import JoblyApi from "../api/api";

/** Jobs
 *
 * Props:
 *
 * State:
 *
 * Routes -> Jobs -> JobsList
 */
function Jobs(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  // TODO: add api call for submit button;
  // Handles the submit for searching for jobs
  function submit() {
    //API GOES here
  }

  useEffect(function fetchAllJobsOnMount() {
    async function fetchAllJobs() {
      const res = await JoblyApi.getAllJobs();
      console.log(res);
      setJobs(res);
      setIsLoading(false);
    }
    fetchAllJobs();
  }, []);

  if (isLoading) return <h2>Loading</h2>;
  return (
    <div className="Jobs">
      <SearchForm submit={submit} />
      <JobsList jobs={jobs} />
    </div>
  );
}

export default Jobs;
