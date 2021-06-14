import React, { useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';

import * as api from './APIFile';
const SignupForm = ({ user, setUser }) => {
	const [error, setError] = useState(false);
	// const [user, setUser] = useState({ email: '', password: '' });
	const handleChange = (event) => {
		setUser({ ...user, [event.target.id]: event.target.value });
	};
	let history = useHistory()
	const handleSignUp = (event) => {
		event.preventDefault();
		api.postSignUp(user, setError);
		history.push("/signin")
	};
	return (
		<div className='form'>
			<form onSubmit={handleSignUp}>
				<label htmlFor='email'>Email</label>
				<input id='email' type='text' onChange={handleChange} />
				<label htmlFor='password'>Password</label>
				<input id='password' type='text' onChange={handleChange} />
				<label htmlFor='Confirm password'> Confirm Password</label>
				<input id='confirm' type='text' />
				<button type='submit' className='submit-button'>
					submit
				</button>
		
			</form>
		</div>
	);
};

export default SignupForm;
