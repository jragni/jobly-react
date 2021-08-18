import React, { useState } from "react";

const initialFdata = { username: "", password: "" };
function LoginForm({ login }) {
  console.log("LoginForm route reached.");
  const [formData, setFormData] = useState(initialFdata);

  console.log(formData, initialFdata);
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("LoginForm submitted");
  }

  return (
    <form className="LoginForm container" onSubmit={handleSubmit}>
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
      <button className="btn btn-sm btn-primary"> Log on </button>
    </form>
  );
}

export default LoginForm;
