import React, { useState } from "react";
import SearchForm from "./SearchForm";
import JobsList from "./JobsList";

function Jobs() {
  //TODO: add list component
  const [jobsList, setJobsList] = useState([]);

  return (
    <div className="Jobs">
      <h1> FOR DEV --- delete later </h1>
      <SearchForm />
      <JobsList jobsList={jobsList} />
    </div>
  );
}

export default Jobs;
