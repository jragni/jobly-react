import React, { useState, useContext } from "react";
import currentUserContext from "../context/currentUserContext";

function ProfileDetails() {
  const [formData, setFormData] = useState({});
  const user = useContext(currentUserContext);
  return <div className="ProfileDetails"></div>;
}

export default ProfileDetails;
