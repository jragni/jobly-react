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
  // TODO: add company list
  // FOR DEV
  // let companies = [
  //   {
  //     name: "test-company-name",
  //     handle: "test-company-handle",
  //     numEmployees: "test-company-num-emp",
  //     logoUrl: "test-logo",
  //     description: "Test Company description",
  //   },
  //   {
  //     handle: "handle-2",
  //     name: "name-2",
  //     numEmployees: "num2",
  //     description: "desc-2",
  //     logoUrl: null,
  //   },
  // ];
  //END DEV

  //TODO: add an effect that makes api call for the list of comapanies
  //TODO: add an api call for the submit button
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
