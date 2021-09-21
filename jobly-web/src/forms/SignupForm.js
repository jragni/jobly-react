import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const initialFormData = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

/** SignupForm
 * Renders form for new users to sign up.
 *
 * Props:
 *  -initialFormData --- default blank form data
 *  -signup --- function that allows user to sign up and log in.
 *
 * States:
 *
 * Routes -> SignUpForm
 */
function SignupForm({ initialFormData, signup, login }) {
  const [formData, setFormData] = useState(initialFormData);
  // ---- Work in progress to validate form and throw error
  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  }

  function isFormValid() {
    // validate password
    if (
      formData.username.length >= 1 &&
      formData.username.length <= 30 &&
      formData.password.length >= 5 &&
      formData.password.length <= 20 &&
      formData.firstName.length >= 1 &&
      formData.firstName.length <= 30 &&
      formData.lastName.length >= 1 &&
      formData.lastName.length <= 30 &&
      formData.email.split("@").length === 2 &&
      formData.email.split(".").length >= 2
    ) {
      console.log("form is valid: true");
      return true;
    } else {
      console.log("form is valid: false");
      return false;
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isFormValid()) {
      signup(formData);
      history.push("/");
      console.log("user sumbitted registration.");
    }
  }

  return (
    <form className="SignupForm container" onSubmit={handleSubmit}>
      <div className="form-group row">
        <label htmlFor="username" className="col-sm-2 col-form-label">
          Username:
        </label>
        <input
          className="form-control col"
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={formData.username}
          required
        />
      </div>
      <div className="form-group row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email:
        </label>
        <input
          className="form-control col"
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email..."
          onChange={handleChange}
          value={formData.email}
          required
        />
      </div>
      <div className="form-group row">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Password:
        </label>
        <input
          className="form-control col"
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
      </div>
      <div className="form-group row">
        <label htmlFor="firstName" className="col-sm-2 col-form-label">
          First Name:
        </label>
        <input
          className="form-control col"
          type="firstName"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name..."
          onChange={handleChange}
          value={formData.firstName}
        />
      </div>
      <div className="form-group row">
        <label htmlFor="lastName" className="col-sm-2 col-form-label">
          Last Name:
        </label>
        <input
          className="form-control col"
          type="lastName"
          id="lastName"
          name="lastName"
          placeholder="Enter your last name..."
          onChange={handleChange}
          value={formData.lastName}
          required
        />
      </div>
      <button className="btn btn-sm btn-primary"> Sign up </button>
    </form>
  );
}

SignupForm.defaultProps = {
  initialFormData,
};
export default SignupForm;
