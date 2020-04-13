import React from 'react';
import { connect } from 'react-redux';
import SearchbarForm from './searchbar_form';

import { withRouter } from 'react-router-dom';

import { changeFilter, updateFilter, refreshFilter } from '../../actions/filter_actions';
import {fetchBusinesses} from '../../actions/business_actions';


const mSTP = (state) => {
    return {
        searchQuery: state.ui.filters.searchQuery,
        searchCity: state.ui.filters.searchCity
    }
};

const mDTP = dispatch => ({
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    refreshFilter: () => dispatch(refreshFilter()),
    fetchBusinesses: () => dispatch(fetchBusinesses()),
});


export default withRouter(connect(mSTP, mDTP)(SearchbarForm));