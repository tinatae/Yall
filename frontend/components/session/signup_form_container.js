import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up',
        otherForm: 'Log-in here instead!',
        navLink: <Link to="/login"><button>Log-in here instead!</button></Link>
    }
};

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm);