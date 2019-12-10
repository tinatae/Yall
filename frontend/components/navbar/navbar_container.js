import { connect } from 'react-redux';
import React from 'react';
import {withRouter} from 'react-router-dom';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
// import { changeFilter } from '../../actions/filter_actions';


const mSTP = (state) => {
    let currentUserId = state.session.id;

    if (currentUserId)
        return { currentUser: state.entities.users[currentUserId] };
    else
        return { currentUser: null }
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
    // changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
});

export default (connect(mSTP, mDTP)(Navbar));