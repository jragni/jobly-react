import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import Alert from "../common/Alert";

function SignupForm({ register }) {
  const initialState = { search: "" };
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);

  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("name: ", name, "value: ", value);
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    try {
      register(formData);
    } catch (errors) {
      setFormErrors(errors);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="SignupForm">
      {/* TODO: add other fields  */}
      <input
        type="text"
        name="username"
        id="search-form-input"
        placeholder="Enter your username..."
        onChange={handleChange}
        value={formData.username}
      />
      <input
        type="password"
        name="password"
        id="search-form-input"
        placeholder="Enter your password..."
        onChange={handleChange}
        value={formData.password}
      />

      {formErrors.length ? <Alert type="danger" messages={formErrors} /> : ""}
      <button className="btn btn-primary" type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
