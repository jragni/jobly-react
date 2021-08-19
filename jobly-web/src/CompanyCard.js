import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";

/** CompanyCard
 *
 * Props: company  --- company details {title, description, logo...}
 * State : None
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  return (
    <div className="companyDetail card">
      <NavLink path={`/companies/${company}`}>
        <div className="card-body">
          <h5 className="card-title">
            {company.title}
            <img src={company.image || ""} alt={company.title} />
          </h5>
          <p>
            <small> {company.description}</small>
          </p>
        </div>
      </NavLink>
    </div>
  );
}

export default CompanyCard;
