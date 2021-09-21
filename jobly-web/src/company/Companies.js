import React, { useState, useEffect } from "react";
import SearchForm from "../forms/SearchForm";
import CompanyList from "./CompanyList";
import JoblyApi from "../api/api";

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

  async function fetchCompanyList(formData) {
    if (formData) console.log(formData);
    let res = await JoblyApi.getCompanyList(formData);
    console.log(res);
    setCompanyList(res);
    setIsLoading(false);
  }

  useEffect(function fetchCompanyListOnMount() {
    fetchCompanyList();
  }, []);

  async function searchCompanies(formData) {
    console.log("Companies/searchCompanies-----formData:", formData);
    console.log("Searching for companies");
    setIsLoading(true);
    await fetchCompanyList({ name: formData.value });
    console.log("search result completed");
  }

  if (isLoading === true) return <i> Loading... </i>;
  return (
    <div className="Companies">
      <SearchForm submitSearch={searchCompanies} />
      <CompanyList companyList={companyList} />
    </div>
  );
}

export default Companies;
