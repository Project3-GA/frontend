import React, { useState } from 'react';


const Form = () => {
    const [loginForm, setLoginForm] = useState({email: "", password: ""})
    
    const [email, setEmail] = useState('')
    const [longtext, setLongtext] = useState('')
    const [select, setSelect] = useState('')
    const [error, setError] = useState(false) 
      

    const handleChange = (event) => {
        setLoginForm(
            { ...loginForm, 
                [event.target.id]: event.target.value 
            }
            )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/api/users/signin";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(loginForm),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch(() => setError(true));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" onChange={handleChange}/>
            <label htmlFor="password">Password</label>
            <input id="password" type="text" value={loginForm.password} onChange={handleChange}/>
            <button type="submit">submit</button>
        </form>
    );
};

// console.log(loginForm)

export default Form;

