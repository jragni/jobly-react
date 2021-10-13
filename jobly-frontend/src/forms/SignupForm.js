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
    <form
      onSubmit={handleSubmit}
      className="SignupForm container w-50"
      method="post"
    >

      <div className="card form-group my-5 mb-3 bg-secondary">
        <h4 className="card-header text-start">Sign Up</h4>
        <div className="card-body">

        <div className="form-floating w-50 mx-auto my-2">
          <input
            className="form-control"
            type="text"
            name="username"
            id="username-form-input"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
            required
          />
          <label htmlFor="username-form-input">
            username
          </label>
        </div>

        <div className="form-floating w-50 mx-auto my-2">
          <input
            className="form-control "
            type="password"
            name="password"
            id="password-form-input"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <label htmlFor="password-form-input">password</label>
          </div>

        <div className="form-floating w-50 mx-auto my-2">
          <input
            className="form-control"
            type="text"
            name="firstName"
            id="firstname-form-input"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstName}
            required
          />
          <label htmlFor="firstname-form-input">first name</label>
          </div>

        <div className="form-floating w-50 mx-auto my-2">
          <input
            className="form-control" 
            type="text"
            name="lastName"
            id="lastname-form-input"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastName}
            required
          />
          <label htmlFor="lastname-form-input">last name</label>
          </div>

        <div className="form-floating w-50 mx-auto my-2">
          <input
            className="form-control" 
            type="email"
            name="email"
            id="email-form-input"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <label htmlFor="email-form-input">email</label>
          </div>

        </div>
      </div>
      {formErrors.length ? <Alert type="danger" messages={formErrors} /> : ""}
      <button className="btn btn-primary" type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
