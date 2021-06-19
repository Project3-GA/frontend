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
import UserCollection from './components/UserCollection';

function App() {
	const [user, setUser] = useState({ email: '', password: '' });
	const [activeUser, setActiveUser] = useState('');
	const [cards, setCards] = useState([]);
	return (
		<main className='container'>
			<Nav activeUser={activeUser} />
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
							activeUser={activeUser}
						/>
					)}
				/>
				<PrivateRoute path='/gallery/create'>
					<CardCreate />
				</PrivateRoute>

				<PrivateRoute exact path='/gallery/:id'>
					<CardDetail user={user} activeUser={activeUser} />
				</PrivateRoute>

				<PrivateRoute exact path='/collection/:id'>
					<UserCollection
						activeUser={activeUser}
						setCards={setCards}
						cards={cards}
					/>
				</PrivateRoute>

				<PrivateRoute path='/gallery'>
					<Gallery cards={cards} setCards={setCards} />
				</PrivateRoute>
			</Switch>
		</main>
	);
}

export default App;
