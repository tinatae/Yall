import React from 'react';
import { connect } from 'react-redux';
import SearchbarForm from './searchbar_form';

import { withRouter } from 'react-router-dom';

import { changeFilter } from '../../actions/filter_actions';


// const mSTP = (state) => {
//     return {
//         // searchQuery: state.ui.filters.searchQuery
//     }
// };

const mDTP = dispatch => ({
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
});


export default withRouter(connect(null, mDTP)(SearchbarForm));