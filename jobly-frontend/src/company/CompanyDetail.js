import React from "react";
import JobsList from "../job/JobsList";

function CompanyDetail(){
   return (
       <div className="CompanyDetail">
           {/* Card of the company */}
           {/* TODO: add company TITLE */}
           {/* TODO: add company DESCRIPTION */}
           <JobsList/>
       </div>
   );  
}

export default CompanyDetail;