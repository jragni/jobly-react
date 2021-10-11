import React from "react";
import SearchForm from "../forms/SearchForm";
import CompanyList from "./CompanyList";

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
  // TODO: add company list
  // FOR DEV
  let companies = [
    {
      name: "test-company-name",
      handle: "test-company-handle",
      numEmployees: "test-company-num-emp",
      logoUrl: "test-logo",
      description: "Test Company description",
    },
    {
      handle: "handle-2",
      name: "name-2",
      numEmployees: "num2",
      description: "desc-2",
      logoUrl: null,
    },
  ];
  //END DEV

  //TODO: add an effect that makes api call for the list of comapanies
  //TODO: add an api call for the submit button
  function submit() {
    alert('hello submit');

  }

  return (
    <div className="Companies container">
      {/* Search Form */}
        <SearchForm submit={submit} />
        {/* Company Lists */}
        <CompanyList companies={companies} />
      </div>
  );
}

export default Companies;
