import React, { useState } from "react";

const initialFormData = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

function SignupForm({ initialFormData }) {
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    return;
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
