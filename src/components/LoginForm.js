import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as api from './APIFile';
const LoginForm = ({ user, setUser }) => {
	const [error, setError] = useState(false);
	let history = useHistory()

	const handleChange = (event) => {
		setUser({ ...user, [event.target.id]: event.target.value });
	};
	const handleSignIn = (event) => {
		event.preventDefault();
		api.postSignIn(user, setError);
		history.push("/gallery")
		window.location.reload()
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
					<p>
					need an account? sign-up{' '}
					<Link to='/signup'>
						<span>here</span>
					</Link>
					.
				</p>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
