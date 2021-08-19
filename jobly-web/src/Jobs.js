import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JobsList from "./JobsList";
import JobsApi from "./api";
/** Jobs
 * Renders page for searching jobs and browsing through job list
 *
 * State:
 * -jobsList --- list of job cards
 *
 * Router -> Jobs -> {JobList, Search Form}
 */
function Jobs() {
  const [jobsList, setJobsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchJobList(formData) {
    //if (formData) console.log("fetching job list :", formData); // used for Dev
    let res = await JobsApi.getJobList(formData);
    console.log(res);
    setJobsList(res);
    setIsLoading(false);
  }

  useEffect(function fetchJobListOnMount() {
    fetchJobList();
  }, []);

  async function searchJobs(formData) {
    //console.log("searching for Job. formData: ", formData); // used for Dev
    setIsLoading(true);
    await fetchJobList({ title: formData.value });
    //console.log("search result completed"); // used for Dev
  }

  if (isLoading) return <i> Loading... </i>;
  return (
    <div className="Jobs container">
      <SearchForm submitSearch={searchJobs} />
      <JobsList jobsList={jobsList} />
    </div>
  );
}

export default Jobs;
