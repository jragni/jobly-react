import React from "react";

/** CompanyCard
 *  The card that contains the information about a company
 * 
 * Props:
 *      - handle 
 *      - name 
 *      - numEmployees 
 *      - description 
 *      - logoUrl
 * 
 * State:
 *      - No states
 * 
 * Render:
 * CompanyList -> CompanyCard 
 */

function CompanyCard({company}) {
    const {handle, name, numEmployees, description, logoUrl} = company;
    return (
        <div className="CompanyCard card bg-light mb-3 w-75">
            <div className="card-header">
                <h4 className="card-title">
                    {name}
                </h4>
                <img src={logoUrl} alt={handle} />  
            </div>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default CompanyCard;
