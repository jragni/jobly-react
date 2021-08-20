import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobsList from "./JobsList";
import JoblyApi from "./api";
/** CompanyDetail
 * Shows a list of the company's jobs
 *
 * Props:
 * - Company
 * States:
 *
 * Routes -> CompanyDetail -> JobsLists
 *
 * Route: "/companies/:company"
 */
function CompanyDetail() {
  const { company } = useParams();
  const [companyDetails, setCompanyDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchCompanyJobsOnMount() {
    async function fetchCompanyDetails() {
      const resp = await JoblyApi.getCompany(company);

      console.log("fetching company", resp);
      setCompanyDetails(resp);
      setIsLoading(false);
    }
    fetchCompanyDetails();
  });
  if (isLoading) return <i> Loading </i>;
  if (!companyDetails) return <i> Company not found. </i>;
  return (
    <div className="CompanyDetail container">
      <h1> {companyDetails.name} </h1>
      <p>
        <small> {companyDetails.description} </small>
      </p>
      <JobsList jobsList={companyDetails.jobs} />
    </div>
  );
}

export default CompanyDetail;
