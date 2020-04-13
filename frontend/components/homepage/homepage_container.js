import React from 'react';
import { connect } from 'react-redux';
import { changeFilter, refreshFilter } from '../../actions/filter_actions';
import Homepage from './homepage';

import { withRouter } from 'react-router-dom';


const mSTP = (state) => ({
    filterCategory: state.ui.filters.filterCategory,
    filterDelivery: state.ui.filters.filterDelivery,   
});

const mDTP = dispatch => ({
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
    refreshFilter: () => dispatch(refreshFilter())
});


export default withRouter(connect(mSTP, mDTP)(Homepage));