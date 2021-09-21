import React from "react";
import { NavLink } from "react-router-dom";

/** CompanyCard
 *
 * Props: company  --- company details {title, description, logo...}
 * State : None
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  return (
    <div className="companyDetail card">
      <NavLink to={`/companies/${company.handle}`}>
        <div className="card-body">
          <h5 className="card-title">
            {company.name}
            <img
              className="ml-5 float-right"
              src={company.logoUrl || ""}
              alt={company.name}
            />
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
