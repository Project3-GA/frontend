import React from 'react'
import { Route, Redirect } from 'react-router-dom'

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
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute
