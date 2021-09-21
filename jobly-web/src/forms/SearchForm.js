import React, { useState } from "react";

/** Search
 * Searchbar component
 *
 * Props:
 * submit --- function to submit
 * initialFormData --- data passed from parent component if any
 *
 * State:
 * ---formData -- search value
 *
 * {Jobs, Companies} -> Search
 *
 */
function Search({ initialFormData = { value: "" }, submitSearch }) {
  const [formData, setFormData] = useState(initialFormData.value);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("SearchForm/handleSubmit---formData", formData);
    submitSearch(formData);
  }

  return (
    <div className="SearchForm mb-4">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mx-sm-3 mb-2 ">
          <input
            className="form-control form-control-lg flex-grow-1"
            id="Search"
            name="value"
            placeholder="Enter search term..."
            onChange={handleChange}
            value={formData.value}
          />
          <div className="col">
            <button className="btn btn-lg btn-primary"> Search </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
