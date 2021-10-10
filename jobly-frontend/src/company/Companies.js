import React from "react";
import SearchForm from "../forms/SearchForm";

/** Companies
 * 
 * 
 * Routes -> Companies -> { CompanyList, SearchForm}
 */

function Companies(props) {
  
  return (
    <div className="Companies">
      {/* Search Form */}
      <SearchForm />
      {/* Company Lists */}
    </div>
  );
}

export default Companies;
