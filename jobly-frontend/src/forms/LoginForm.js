import React, { useState } from "react";

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
  const initialState = { search: "" };
  const [formData, setFormData] = useState(initialState);

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
    submit(formData);
    console.log("form sent \n, data: ", formData);
  }

  return (
    <form onSubmit={handleSubmit} className="LoginForm container w-50">
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
          />
          <input
            className='row mx-auto my-2 w-50 form-control'
            type="password"
            name="password"
            id="password-form-input"
            placeholder="password"
            onChange={handleChange}
            value={formData.password}
          />
          <button className="btn btn-primary" type="submit">
            login
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;

{
  /* <div class="form-group">
  <label class="form-label mt-4">Floating labels</label>
  <div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
    <label for="floatingInput">Email address</label>
  </div>
  <div class="form-floating">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
    <label for="floatingPassword">Password</label>
  </div>
</div>
+/ */
}
