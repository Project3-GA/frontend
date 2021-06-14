import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from './APIFile';
const SignupForm = ({ user, setUser }) => {
	const [error, setError] = useState(false);
	// const [user, setUser] = useState({ email: '', password: '' });
	const handleChange = (event) => {
		setUser({ ...user, [event.target.id]: event.target.value });
	};
	const handleSignUp = (event) => {
		event.preventDefault();
		api.postSignUp(user, setError);
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
				<p>
					already have an account? sign-in{' '}
					<Link to='/signin'>
						<span>here</span>
					</Link>
					.
				</p>
			</form>
		</div>
	);
};

export default SignupForm;
