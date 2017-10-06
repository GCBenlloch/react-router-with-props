import React from 'react'
import { Route } from 'react-router-dom'
import renderMergedProps from './renderMergedProps';

const PropsRoute = ({ component, ...rest }) => {
    return (
        <Route {...rest} render={ routeProps => {
            return renderMergedProps(component, routeProps, rest);
        }}/>
    );
};

export default PropsRoute;
