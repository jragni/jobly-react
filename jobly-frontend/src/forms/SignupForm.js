import React, { useState } from "react";
import Alert from "../common/Alert";
import { Link } from "react-router-dom";
import "./SignupForm.css";
import {useHistory} from 'react-router-dom';

/** SignupForm
 * Component that allows users to register a new account
 *
 * Props:
 *  - register: function that makes a post request to create a new account
 *
 * State:
 *  - formData: form data with {username, password, firstName, lastName, email}
 *  - formError: messages for corrective action upon invalid data submission
 *
 * Routes -> SignupForm
 */

function SignupForm({ register }) {
  const initialState = {
     username: "",
     password: "",
     firstName:"",
     lastName:"",
     email:"",
  };

  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("name: ", name, "value: ", value);
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await register(formData);
      history.push('/');

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
            <label htmlFor="username-form-input">username</label>
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

      {formErrors.length ? <Alert type="danger" messages={formErrors} /> : ""}
          <button className="btn btn-primary mb-3 me-2" type="submit">
            sign up
          </button>
          <p className="my-2 text-muted">
             Already a user? <Link class='link' to="/login"> Log in!</Link></p>
        </div>

      </div>
    </form>
  );
}

export default SignupForm;
