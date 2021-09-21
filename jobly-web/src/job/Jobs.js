import React, { useState, useEffect } from "react";
import SearchForm from "../forms/SearchForm";
import JobsList from "./JobsList";
import JobsApi from "../api/api";

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

  /* fetches joblist from API  and updates list of jobs
   * @param {object} formData --- {ti}
   */
  async function fetchJobList(formData) {
    let res = await JobsApi.getJobList(formData);
    setJobsList(res);
    setIsLoading(false);
  }

  useEffect(function fetchJobListOnMount() {
    fetchJobList();
  }, []);

  /** searchJobs
   * fetches jpbs with matching title.
   * @param {object} formData --- {title}
   */
  async function searchJobs(formData) {
    setIsLoading(true);
    await fetchJobList({ title: formData.value });
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
