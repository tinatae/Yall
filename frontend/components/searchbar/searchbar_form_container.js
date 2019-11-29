//     searchQuery: new URLSearchParams(location.search).get('searchQuery'),

import React from 'react';
import { connect } from 'react-redux';
import SearchbarForm from './searchbar_form';

import { fetchBusinesses } from '../../actions/business_actions';

import { withRouter } from 'react-router-dom';

import { asArray } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';

const mSTP = (state, { location }) => {
    return {
        businesses: Object.values(state.entities.businesses),
        // businesses: asArray(state.entities)
    }
};

const mDTP = dispatch => ({
    fetchBusinesses: (filters) => dispatch(fetchBusinesses(filters)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});


export default withRouter(connect(mSTP, mDTP)(SearchbarForm));