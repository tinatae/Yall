//     searchQuery: new URLSearchParams(location.search).get('searchQuery'),

import React from 'react';
import { connect } from 'react-redux';
import SearchbarForm from './searchbar_form';

import { fetchBusinesses } from '../../actions/business_actions';

import { withRouter } from 'react-router-dom';

import { asArray } from '../../reducers/selectors';
import { updateFilter, changeFilter } from '../../actions/filter_actions';


// const mSTP = (state) => {
//     return {
//         // searchQuery: state.ui.filters.searchQuery
//     }
// };

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
});


export default withRouter(connect(null, mDTP)(SearchbarForm));