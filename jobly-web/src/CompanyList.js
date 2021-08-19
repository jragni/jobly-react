import React from "react";
import CompanyCard from "./CompanyCard";

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
