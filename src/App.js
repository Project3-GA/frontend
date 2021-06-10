import React, { useState } from 'react';
import Form from './Form';
import Cardform from './Cardform';

function App() {
  
	const [loginForm, setLoginForm] = useState({ email: '', password: '' });

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	return (
		<main>
			<h1>React Forms</h1>
			<Form
				loginForm={loginForm}
				user={user}
				setUser={setUser}
				setLoginForm={setLoginForm}
			/>
			<Cardform loginForm={loginForm} />
			
		</main>
	);
}

export default App;
