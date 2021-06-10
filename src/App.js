import React, { useState } from 'react';
import Form from './Form';
import Cardform from './Cardform';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Gallery from './components/Gallery'
import PrivateRoute from './components/PrivateRoute'
import { Route, Switch } from 'react-router-dom';
function App() {
	const [user, setUser] = useState({ email: '', password: '' });

	return (
		<main>
			<h1>hatCrew</h1>
			<Switch>
				<Route
					path='/signup'
					render={(routerProps) => <SignupForm user={user} setUser={setUser} />}
				/>
				<Route
					path='/signin'
					render={(routerProps) => <LoginForm user={user} setUser={setUser} />}
				/>

				<PrivateRoute path='/gallery'>
					<Gallery />
				</PrivateRoute>


			</Switch>


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
