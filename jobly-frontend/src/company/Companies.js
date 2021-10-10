import React from "react";
import SearchForm from "../forms/SearchForm";
import CompanyList from "./CompanyList";

/** Companies
 * 
 * Routes -> Companies -> { CompanyList, SearchForm}
 */

function Companies(props) {
  
  return (
    <div className="Companies">
      {/* Search Form */}
      <SearchForm />
      {/* Company Lists */}
      {/* TODO: add companyList prop */}
      <CompanyList />
    </div>
  );
}

export default Companies;
