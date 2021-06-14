import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from './APIFile';
const LoginForm = ({ user, setUser }) => {
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		setUser({ ...user, [event.target.id]: event.target.value });
	};
	const handleSignIn = (event) => {
		event.preventDefault();
		api.postSignIn(user, setError);
	};
	return (
		<div>
			<div className='form'>
				<form onSubmit={handleSignIn}>
					<label htmlFor='email'>Email</label>
					<input id='email' type='text' onChange={handleChange} />
					<label htmlFor='password'>Password</label>
					<input id='password' type='text' onChange={handleChange} />
					<button type='submit' className='submit-button'>
						submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
