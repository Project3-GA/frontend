import React, { useState } from 'react';
import Form from './Form';
import Cardform from './Cardform';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import { Route } from 'react-router-dom';
function App() {
	const [user, setUser] = useState({ email: '', password: '' });

	return (
		<main>
			<h1>React Forms</h1>
			<Route
				path='/signup'
				render={(routerProps) => <SignupForm user={user} setUser={setUser} />}
			/>
			<Route
				path='/signin'
				render={(routerProps) => <LoginForm user={user} setUser={setUser} />}
			/>
			{/* <Form
				loginForm={loginForm}
				user={user}
				setUser={setUser}
				setLoginForm={setLoginForm}
			/>
			<Cardform loginForm={loginForm} /> */}
		</main>
	);
}

export default App;
