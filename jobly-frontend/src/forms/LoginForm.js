import React, {useState} from "react";

function LoginForm({submit}) {
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
        <form onSubmit={handleSubmit} className="LoginForm">
            <input 
                type="text"
                name="username"
                id="username-form-input"
                placeholder="Please enter your username..."
                onChange={handleChange}
                value={formData.username}
            />
            <input 
                type="text"
                name="password"
                id="password-form-input"
                placeholder="Please enter your username..."
                onChange={handleChange}
                value={formData.password}
            />
            <button className='btn btn-primary' type="submit">login</button>
        </form>
    );
}

export default LoginForm;