import React, { useState } from "react";
import validation from "./validation";
import style from "./form.module.css"


const Form = ({login}) => {


const [userData, setUserData] = useState({
    email: "",
    password: "",
})

const [errors, setErrors] = useState({});

const handleChange = (event)=> {
    const property = event.target.name;
    const value = event.target.value;

    // setUserData({...userData, [property]: value }); 
    
    
    setUserData((prevUserData) => ({ ...prevUserData, [property]: value }));
    validation({ ...userData, [property]: value }, setErrors);
}

const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
}
 
 return(
<div className= {style.loginForm}>
<form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="email">Email: </label>
        <input 
        type="text" 
        name="email" 
        value={userData.email} 
        onChange={handleChange}
        className={errors.email ? style.error : style.success}
        />
        <span>{errors.email}</span>
    </div>
    <div>
        <label htmlFor="password">Password: </label>
        <input 
        type="password" 
        name="password" 
        value={userData.password} 
        onChange={handleChange}
        className={errors.password ? style.error : style.success}
        />
        <span>{errors.password}</span>
    </div>

    <button type="submit">Submit</button>
 </form>   
</div>
 
 )
}

export default Form;