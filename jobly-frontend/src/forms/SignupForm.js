import React, {useState} from 'react';

function SignupForm({sumbit}) {

    // FOR DEV
    function submit(){};
    // END DEV

    const initialState = {search: ""};
    const [formData, setFormData] = useState(initialState);

    // TODO: Add query from DB to get user info
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
        <form onSubmit={handleSubmit} className="SignupForm">
            {/* TODO: add other fields  */}
            <input 
                type="text"
                name="username"
                id="search-form-input"
                placeholder="Enter your username..."
                onChange={handleChange}
                value={formData.username}
            />
            <input 
                type="password"
                name="password"
                id="search-form-input"
                placeholder="Enter your password..."
                onChange={handleChange}
                value={formData.password}
            />
            <button className='btn btn-primary' type="submit">Sign Up</button>
        </form>
    );
}

export default SignupForm;