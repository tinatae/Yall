import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ path, loggedIn, exact, component: Component }) => (
    <Route path={path} exact={exact} render={props => (
        !loggedIn ? (<Component {...props} />) : (<Redirect to="/" />)
    )}
  />
);

const Protected = ({ path, loggedIn, exact, component: Component }) => (
    <Route path={path} exact={exact} render={props => (
        loggedIn? (<Component {...props} />) : (<Redirect to="/login" />)
    )}
  />
);

const mSTP = state => ({ 
    loggedIn: Boolean(state.session.id) 
});

export const AuthRoute = withRouter(connect(mSTP)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));