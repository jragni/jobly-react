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
 *  - isLoading {Bool} : Boolean to trigger the loading view
 *  - companies {Array.Object} : List of companies with information about
 *                              {name, description, numEmployees, logoUrl...}
 *  - page {Number} : The page number used for pagination of the company cards
 *
 * Routes -> Companies -> { CompanyList, SearchForm}
 */
function Companies(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState(null);
  const [lastSearch, setLastSearch] = useState("");

  /** Search for names of company */
  async function search(name) {
    try {
    const resp = await JoblyApi.getCompanies(name);
      setLastSearch(name);
      setCompanies(resp);
    } catch(error) {
      console.log(error);
    }
  }

  /* Fetch list of all companies using JoblyApi*/
  useEffect(function fetchAllCompaniesWhenMounted() {
    async function fetchAllCompanies() {
      const resp = await JoblyApi.getCompanies();
      console.log(resp);
      setCompanies(resp);
      setIsLoading(false);
    }
    fetchAllCompanies();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="Companies">
      <SearchForm lastSearch={lastSearch} search={search} />
      <CompanyList companies={companies} />
    </div>
  );
}

export default Companies;
