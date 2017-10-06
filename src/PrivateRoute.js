import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import renderMergedProps from './renderMergedProps';

const PrivateRoute = ({ component, authed = false, redirectTo, ...rest }) => {
    return (
        <Route {...rest} render={ routeProps => {
            return authed ? (
                renderMergedProps(component, routeProps, rest)
            ) : (
                <Redirect to={{
                    pathname: redirectTo,
                    state: { from: routeProps.location }
                }}/>
            );
        }}/>
    );
};

export default PrivateRoute;
