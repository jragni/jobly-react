import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const initialFdata = { username: "", password: "" };
/** LoginForm
 * Form to log user into account
 *
 * Props:
 *  - login -- function to log user in
 *
 * State:
 * - formData --- data containing username, password
 *
 * Route -> LoginForm
 */
function LoginForm({ login }) {
  console.log("LoginForm route reached.");
  const [formData, setFormData] = useState(initialFdata);
  const history = useHistory();
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
    login(formData);
    console.log("LoginForm submitted");
    history.push("/");
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
      <button className="btn btn-sm btn-primary"> Log on </button>
    </form>
  );
}

export default LoginForm;
