import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//Setting the PrivateRoute to be used for permission based access to components
function PrivateRoute({ children, ...rest }) {
	let auth = localStorage.getItem('token');
	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/signin',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
