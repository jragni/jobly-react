import React, { useState } from "react";
import CompanyCard from "./CompanyCard";

function CompanyList({ companyList }) {
  return (
    <ul className="CompanyList">
      {companyList.map((c) => (
        <li>
          <CompanyCard company={c} />
        </li>
      ))}
    </ul>
  );
}

export default CompanyList;
