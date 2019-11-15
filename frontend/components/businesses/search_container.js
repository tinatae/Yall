import { connect } from 'react-redux';

import Search from './business_search';
// import {updateFilter} from '../../actions/filter_actions';
import {fetchBusinesses} from  '../../actions/business_actions';
import {asArray} from '../../reducers/selectors';

const mSTP = (state) => ({
    businesses: Object.values(state.entities.businesses)
});

const mDTP = (dispatch) => ({
    // updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
   fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(mSTP, mDTP)(Search);