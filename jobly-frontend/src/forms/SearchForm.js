import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ search, lastSearch }) {
  const [formData, setFormData] = useState({ search: lastSearch });

  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log("name: ", name, "value: ", value);
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    let searchTerm = formData.search.trim() || undefined;
    search(searchTerm);
    console.log("form sent \n, data: ", formData);
  }

  return (
    <form onSubmit={handleSubmit} className="SearchForm">
      <div className="w-75 input-group my-3 mx-auto">
        <input
          className=" form-control"
          type="text"
          name="search"
          id="search-form-input"
          placeholder="Search..."
          onChange={handleChange}
          value={formData.search}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
