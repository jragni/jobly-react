import React, { useState } from "react";
import { useParams } from "react-router-dom";

function CompanyDetail(companyJobList) {
  const { company } = useParams();
  return (
    <div classname="companyDetail">
      <h1> FOR DEV TESTING --- will delete later </h1>
    </div>
  );
}

export default CompanyDetail;
