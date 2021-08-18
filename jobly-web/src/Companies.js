import React, { useState } from "react";
import SearchForm from "./SearchForm";
import CompanyList from "./CompanyList";

function Companies() {
  //TODO: add company list component
  const [companyList, setCompanyList] = useState([]);

  return (
    <div className="Companies">
      <h1> FOR DEV --- delete later </h1>
      <SearchForm />
      <CompanyList companyList={companyList} />
    </div>
  );
}

export default Companies;
