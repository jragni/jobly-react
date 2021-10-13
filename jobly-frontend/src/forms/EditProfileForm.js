import React, {useState} from 'react';

function EditProfileForm({sumbit}) {
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
// TODO: FORMAT into card form
    return (
        <form onSubmit={handleSubmit} className="EditProfileForm">
            {/* TODO: add other fields  */}
            <input 
                type="text"
                name="username"
                id="-form-input"
                placeholder="username"
                onChange={handleChange}
                value={formData.username}
                readOnly
            />
            <button className='btn btn-primary' type="submit">Save Changes</button>
        </form>
    );
}

export default EditProfileForm;