import { connect } from 'react-redux';

import Search from './search';
import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';

const mSTP = state => ({
    businesses: asArray(state.entities),
    minPricepoint: state.ui.filters.minPricepoint,
    maxPricepoint: state.ui.filters.maxPricepoint
});

const mDTP = (dispatch) => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
//    fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(mSTP, mDTP)(Search);