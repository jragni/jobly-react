import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import CompanyList from "./CompanyList";
import JoblyApi from "./api";

/**Companies
 * Renders Companies page with searchbar and list of companies.
 *
 * Props: None
 *
 * States:
 * -companyList --- List of company cards
 *
 * Routes -> Companies -> {SearchForm, CompanyList}
 */
function Companies() {
  const [companyList, setCompanyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchCompanyListOnMount() {
    async function fetchCompanyList() {
      let res = await JoblyApi.getCompanyList();
      setCompanyList(res);
      setIsLoading(false);
    }
    fetchCompanyList();
  }, []);

  if (isLoading) return <i> Loading... </i>;
  return (
    <div className="Companies">
      <SearchForm />
      <CompanyList companyList={companyList} />
    </div>
  );
}

export default Companies;
