import React, { useState } from "react";

function Search({ initialFormData = { value: "" } }) {
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
    return;
  }
  return (
    <div className="SearchForm mb-4">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control form-control-lg flex-grow-1"
          id="Search"
          placeholder="Enter search term..."
          onChange={handleChange}
          value={formData.value}
        />
      </form>
    </div>
  );
}

export default Search;
