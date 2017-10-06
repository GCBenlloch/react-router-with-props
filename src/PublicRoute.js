import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import renderMergedProps from './renderMergedProps';

const PublicRoute = ({ component, authed = false, redirectTo, ...rest }) => {
    return (
        <Route {...rest} render={ routeProps => {
            return authed ? (
                <Redirect to={{
                    pathname: redirectTo,
                    state: { from: routeProps.location }
                }}/>
            ) : (
                renderMergedProps(component, routeProps, rest)
            );
        }}/>
    );
};

export default PublicRoute;
