import React, { useState, useEffect } from "react";
import SearchForm from "../forms/SearchForm";
import CompanyList from "./CompanyList";
import JoblyApi from "../api/api";

/** Companies
 *  The component that shows the company landing page. It consists of the
 *  search form and the list of companies
 *
 * Props:
 *  - companyList {Array.Object} List of of company cards
 *                              (This is the data from API not the component)
 *
 * State:
 *
 * Routes -> Companies -> { CompanyList, SearchForm}
 */
function Companies(props) {
  let [isLoading, setIsLoading] = useState(true);
  let [companies, setCompanies] = useState([]);

  // TODO: add a submit api for search
  /** Submit function for searchbar */
  function submit() {
    alert("hello submit");
  }

  /* Get company list from api */
  useEffect(
    function fetchAllCompaniesWhenMounted() {
      async function fetchAllCompanies() {
        const resp = await JoblyApi.getAllCompanies();
        console.log(resp);
        setCompanies(resp);
        setIsLoading(false);
      }
      fetchAllCompanies();
    }, []
  );

  if (isLoading) return <h1>Loading...</h1>
  return (
    <div className="Companies">
      {/* Search Form */}
      <SearchForm submit={submit} />
      {/* Company Lists */}
      <CompanyList companies={companies} />
    </div>
  );
}

export default Companies;
