import React from 'react';
import { connect } from 'react-redux';
import SearchbarForm from './searchbar_form';

import { withRouter } from 'react-router-dom';

import { changeFilter, updateFilter } from '../../actions/filter_actions';


const mSTP = (state) => {
    return {
        searchQuery: state.ui.filters.searchQuery,
        searchCity: state.ui.filters.searchCity
    }
};

const mDTP = dispatch => ({
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});


export default withRouter(connect(mSTP, mDTP)(SearchbarForm));