import React from "react";
import CompanyCard from "./CompanyCard";

/** CompanyList
 * The list of companies containing company cards
 *
 * Props:
 *      -companies --- List of objects containing Company information
 *                     {name, description, handle,...}
 * State:
 *      - No States
 *
 * Companies -> CompanyList -> CompanyCard
 */

function CompanyList({ companies }) {
  /** TODO: decide on using context for the props */

  return (
    <div className="CompanyList">
      {companies.map((company) => (
        <CompanyCard company={company} />
      ))}
    </div>
  );
}

export default CompanyList;
