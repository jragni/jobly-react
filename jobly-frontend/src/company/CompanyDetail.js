import React, { useState, useEffect } from "react";
import JobList from "../job/JobsList";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";

/**CompanuyDetail
 * Information about a company and the list of jobs available
 *
 * Props:
 *      - jobs : List of jobcards
 *
 * State:
 *      -isLoaded {Bool} : used for triggering loading display
 *      -company {Object}  : details containing the company
 *          { handle, name, description, numEmployees, logoUrl, jobs }
 *          where jobs is [{ id, title, salary, equity }, ...]
 */
function CompanyDetail(props) {
  let [isLoading, setIsLoading] = useState(true);
  let [company, setCompany] = useState([]);

  const { handle } = useParams();
  useEffect(function getJobCompanyListOnMount() {
    async function getCompanyJobList() {
      const res = await JoblyApi.getCompany(handle);
      setCompany(res);
      setIsLoading(false);
    }
    getCompanyJobList();
  }, []);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="CompanyDetail">
      <div className='text-start w-75 my-3 mx-auto'>
        <h4>{company.name}</h4>
        <h5 className='text-muted'>
            <em>{company.description}</em>
        </h5>
      </div>
      <JobList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
