import React , { useState } from "react";

const Form = ({ initialItem, handleSubmit, buttonLabel, history }) => {
    const [formData, setFormData] = useState(initialItem)

    //////////////////
    // Functions
    //////////////////
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value });
    };
    
    const handleSubmission = (event) => {
        event.preventDefault();
        handleSubmit(formData);
        history.push("/");
    };

    //Form
    return (
        <form onSubmit={handleSubmission}>
            <input
                type="text"
                onChange={handleChange}
                value={formData.piece}
                name="piece"
            />
            <input 
                type="text"
                onChange={handleChange}
                value={formData.details}
                name="details"
            />
            <input 
                type="text"
                onChange={handleChange}
                value={formData.picture}
                name="picture"
            />
            <input type="submit" value={buttonLabel} />
        </form>
    );
};

export default Form;