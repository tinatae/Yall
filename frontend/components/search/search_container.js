import { connect } from 'react-redux';

import Search from './search';
import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
// import { asArray, selectReviewsForBusiness } from '../../reducers/selectors';

const mSTP = (state, ownProps) => ({
    businesses: asArray(state.entities),
    minPricepoint: state.ui.filters.minPricepoint,
    maxPricepoint: state.ui.filters.maxPricepoint,
    filterCategory: state.ui.filters.filterCategory,
});

const mDTP = (dispatch) => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
//    fetchBusinesses: () => dispatch(fetchBusinesses())
//    selectReviewsForBusiness: ({ businesses, reviews }, business) => dispatch(selectReviewsForBusiness({ businesses, reviews }, business))
});

export default connect(mSTP, mDTP)(Search);