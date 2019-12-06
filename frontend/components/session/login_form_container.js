import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Log In',
        navLink: <Link to="/signup"><button>Sign-up here instead!</button></Link>
    }
};

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user))
    }
);



export default connect(mSTP, mDTP)(SessionForm);