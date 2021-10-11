import React from "react";

/** CompanyCard
 *  The card that contains the information about a company
 *
 * Props:
 *      - company: company details containing
 *                {handle, name, description, logoUrl}  
 *
 * State:
 *      - No states
 *
 * Render:
 * CompanyList -> CompanyCard
 */
function CompanyCard({ company }) {
  const { handle, name , description, logoUrl } = company;
  return (
    <div className="CompanyCard card bg-light container my-3 w-75">
      <div className="card-header row">
        <h3 className="card-title text-start col">{name}</h3>
        {logoUrl ? <img className="col-sm-2" src={logoUrl} alt={handle}/> : ""}
      </div>
      <div className="card-body">
        <p className="card-text text-start">{description}</p>
      </div>
    </div>
  );
}

export default CompanyCard;
