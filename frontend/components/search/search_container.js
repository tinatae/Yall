import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Search from './search';
import { updateFilter, changeFilter, clearFilter, refreshFilter } from '../../actions/filter_actions';

import { asArray } from '../../reducers/selectors';
import SearchbarForm from '../searchbar/searchbar_form';

// import { asArray, selectReviewsForBusiness } from '../../reducers/selectors';

const mSTP = (state, {location}) => ({
    searchQuery: state.ui.filters.searchQuery,
    businesses: asArray(state.entities),
    minPricepoint: state.ui.filters.minPricepoint,
    maxPricepoint: state.ui.filters.maxPricepoint,
    filterCategory: state.ui.filters.filterCategory,
    filterOpenNow: state.ui.filters.filterOpenNow,
    filterDelivery: state.ui.filters.filterDelivery,
    filterTakeout: state.ui.filters.filterTakeout,
    // filterRating: state.ui.filters.filterRating
});

const mDTP = (dispatch) => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
    refreshFilter: () => dispatch(refreshFilter())
});

export default withRouter(connect(mSTP, mDTP)(Search));