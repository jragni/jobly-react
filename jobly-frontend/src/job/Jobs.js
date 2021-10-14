import React, { useState, useEffect} from "react";
import SearchForm from "../forms/SearchForm";
import JobsList from "../job/JobsList";
import JoblyApi from "../api/api";

/** Jobs
 * Component for rendering the Jobs page.
 *
 * 
 * Props:
 *
 * State:
 *  - isLoading: a boolean to check if promises have been fulfilled.
 *  - jobs: a list of jobs with {title, description, salary, equity}
 * 
 * Routes -> Jobs -> JobsList
 */
function Jobs(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  /** Handles searching for job by title. Does not have to be exact match */
  async function search(title) {
    const res = await JoblyApi.getJobs(title);
    setJobs(res);
  }

  useEffect(function fetchAllJobsOnMount() {
    async function fetchAllJobs() {
      const res = await JoblyApi.getJobs();
      console.log(res);
      setJobs(res);
      setIsLoading(false);
    }
    fetchAllJobs();
  }, []);


  if (isLoading) return <h2>Loading</h2>;
  return (
    <div className="Jobs">
      <SearchForm search={search} />
      <JobsList jobs={jobs} />
    </div>
  );
}

export default Jobs;
