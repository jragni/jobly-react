import React, {useState} from "react";
import "./SearchForm.css"


function SearchForm({submit,}) {
    const initialState = {search: ""};
    const [formData, setFormData] = useState(initialState);

    function handleChange(evt){
        const {name, value} = evt.target;
        console.log('name: ', name, 'value: ', value);
        setFormData( fData => ({
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
        <form onSubmit={handleSubmit} className="SearchForm">
            <input 
                type="text"
                name="search"
                id="search-form-input"
                placeholder="Search..."
                onChange={handleChange}
                value={formData.search}
            />
            <button className='btn btn-primary' type="submit">Search</button>
        </form>
    );
}

export default SearchForm;