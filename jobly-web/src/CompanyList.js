import React from "react";
import CompanyCard from "./CompanyCard";

/** CompanyList
 * List of company cards.
 *
 * Props:
 *  -companyList --- List of company cards.
 *
 * State: None
 * company -> CompanyList -> CompanyCard
 */

function CompanyList({ companyList }) {
  return (
    <ul className="CompanyList">
      {companyList.map((c) => (
        <li key={c.handle}>
          <CompanyCard key={c.handle} company={c} />
        </li>
      ))}
    </ul>
  );
}

export default CompanyList;
