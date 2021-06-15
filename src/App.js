import './App.css';
import React, { useState } from 'react';
import {
	CardCreate,
	CardDetail,
	Nav,
	LoginForm,
	SignupForm,
	Gallery,
	PrivateRoute,
} from './components';

import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
	const [user, setUser] = useState({ email: '', password: '' });
	const [activeUser, setActiveUser] = useState('');

	return (
		<main className='container'>
			<Nav />
			<Switch>
				<Route exact path='/'>
					<Redirect to='/signin' />
				</Route>
				<Route
					path='/signup'
					render={(routerProps) => <SignupForm user={user} setUser={setUser} />}
				/>
				<Route
					path='/signin'
					render={(routerProps) => (
						<LoginForm
							user={user}
							setUser={setUser}
							setActiveUser={setActiveUser}
						/>
					)}
				/>
				<PrivateRoute path='/gallery/create'>
					<CardCreate />
				</PrivateRoute>

				{/* <PrivateRoute path='/gallery/:id'>
					<CardDetail />
				</PrivateRoute> */}

				<PrivateRoute exact path='/gallery/:id'>
					<CardDetail user={user} activeUser={activeUser} />
				</PrivateRoute>

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
