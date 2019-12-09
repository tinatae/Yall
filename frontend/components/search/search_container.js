import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Search from './search';
import { updateFilter, changeFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
import SearchbarForm from '../searchbar/searchbar_form';

// import { asArray, selectReviewsForBusiness } from '../../reducers/selectors';

const mSTP = (state, {location}) => ({
    searchQuery: state.ui.filters.searchQuery,
    businesses: asArray(state.entities),
    minPricepoint: state.ui.filters.minPricepoint,
    maxPricepoint: state.ui.filters.maxPricepoint,
    filterCategory: state.ui.filters.filterCategory,
    filterRating: state.ui.filters.filterRating
});

const mDTP = (dispatch) => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
//    fetchBusinesses: () => dispatch(fetchBusinesses())
//    selectReviewsForBusiness: ({ businesses, reviews }, business) => dispatch(selectReviewsForBusiness({ businesses, reviews }, business))
});

export default withRouter(connect(mSTP, mDTP)(Search));