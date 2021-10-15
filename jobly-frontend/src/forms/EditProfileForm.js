import React, { useState, useContext } from "react";
import Alert from "../common/Alert";
import UserContext from "../context/UserContext";

/**EditProfileForm
 * Component that allows user to update their user information.
 *
 * Props:
 *  - update: function that makes a patch request to update user information
 *
 * States:
 *  - formData: user modifiable data
 *  - formErrors: error messages that appear upon invalid data submission.
 *
 * Routes -> EditProfileForm
 */
function EditProfileForm({ update }) {
  const {currentUser} = useContext(UserContext);
  const [formData, setFormData] = useState(currentUser);
  const [formErrors, setFormErrors] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const successMessage = ["User information has been updated!"];

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.debug("EditProfileForm.handleSubmit");
    // Data for submission to update
    let data = {};
    try {
      /* If the field data is different from current data, it will be updated */
      for (let [key, value] of Object.entries(formData)) {
        if (value && currentUser[key] !== value) {
          data[key] = value;
        }
      }
      update(data);
      setIsUpdated(true);
    } catch (error) {
      setFormErrors(error);
    }
    console.log("update sent \n, data: ", data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="EditUserForm container w-75"
      method="patch"
    >
      <div className="card form-group mx-auto my-5 mb-3 bg-secondary">
        <h4 className="card-header text-start">Edit Profile </h4>
        <div className="card-body d-block">

          <div className="form-floating mx-auto my-2">
            <input
              className="form-control"
              type="text"
              name="username"
              id="username-form-input"
              placeholder="Username"
              onChange={handleChange}
              value={formData.username}
              readOnly
            />
            <label htmlFor="username-form-input">username</label>
          </div>

          <div className="form-floating mx-auto my-2">
            <input
              className="form-control "
              type="password"
              name="password"
              id="password-form-input"
              placeholder="new password"
              onChange={handleChange}
              value={formData.password}
            />
            <label htmlFor="password-form-input">new password</label>
          </div>

          <div className="form-floating mx-auto my-2">
            <input
              className="form-control"
              type="text"
              name="firstName"
              id="firstname-form-input"
              placeholder="First Name"
              onChange={handleChange}
              value={formData.firstName}
            />
            <label htmlFor="firstname-form-input">first name</label>
          </div>

          <div className="form-floating mx-auto my-2">
            <input
              className="form-control"
              type="text"
              name="lastName"
              id="lastname-form-input"
              placeholder="Last Name"
              onChange={handleChange}
              value={formData.lastName}
            />
            <label htmlFor="lastname-form-input">last name</label>
          </div>

          <div className="form-floating mx-auto my-2">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email-form-input"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
            <label htmlFor="email-form-input">email</label>
          </div>

          {formErrors.length ? (
            <Alert type="danger" messages={formErrors} />
          ) : (
            ""
          )}

          {isUpdated ? <Alert type="success" messages={successMessage} /> : ""}
          <button className="btn btn-primary">Update!</button>
        </div>
      </div>
    </form>
  );
}

export default EditProfileForm;
