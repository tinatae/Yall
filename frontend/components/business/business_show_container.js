import {connect} from 'react-redux';

import {fetchBusiness} from '../../actions/business_actions';
import {selectBusiness, selectReviewsForBusiness} from '../../reducers/selectors';
import BusinessShow from './business_show';

const mSTP = (state, {match}) => {
    const businessId = parseInt(match.params.businessId);
    const business = selectBusiness(state.entities.businessId);
    const reviews = selectReviewsForBusiness(state.entities, business);
    // return {
    //     businessId,
    //     business,
    //     reviews
    // };
};

const mDTP = dispatch => ({
    fetchBusiness: id => dispatch(fetchBusiness(id))
});

export default connect(mSTP, mDTP)(BusinessShow);