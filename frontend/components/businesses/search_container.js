import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions';
import Search from './business_search';

const mSTP = (state) => ({
    businesses: Object.values(state.entities.businesses)
});

const mDTP = (dispatch) => ({
    fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(mSTP, mDTP)(Search);