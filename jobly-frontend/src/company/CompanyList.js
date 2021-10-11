import React from "react";
import CompanyCard from "./CompanyCard";

/** CompanyList
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
    <div className="CompanyList d-block justify-content-center">
      {/* Company Cards */}
      {companies.map((company) => (
        <CompanyCard company={company} />
      ))}
    </div>
  );
}

export default CompanyList;
