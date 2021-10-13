import React, { useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import Alert from "../common/Alert";

/** LoginForm
 * User login page.
 * 
 * Props:
 *  - submit : function that allows the user to login  
 * 
 * State:
 *  - formData {username, password} : required fields
 */

function LoginForm({ submit }) {
  const initialState = { username: "" , password: ""};
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
        await submit(formData);
        history.push('/');
        
    } catch (error) {
        setFormErrors(error);
    }
    console.log("login sent \n, data: ", formData);
  }

  return (
    <form onSubmit={handleSubmit} className="LoginForm container w-50" method="post">
      <div className="card form-group my-5 mb-3 bg-secondary">
        <h4 className="card-header text-start">Login</h4>
        <div className="card-body">
          <input
            className="row mx-auto my-2 w-50 form-control"
            type="text"
            name="username"
            id="username-form-input"
            placeholder="username"
            onChange={handleChange}
            value={formData.username}
            required
          />
          <input
            className='row mx-auto my-2 w-50 form-control'
            type="password"
            name="password"
            id="password-form-input"
            placeholder="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null}

          <button className="btn btn-primary" type="submit">
            login
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;