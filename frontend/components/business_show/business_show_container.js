import { connect } from 'react-redux';

import {fetchBusiness, deleteReview} from '../../actions/business_actions';
import {selectBusiness, selectReviewsForBusiness} from '../../reducers/selectors';
import BusinessShow from './business_show';

const mSTP = (state, { match }) => {
    const businessId = parseInt(match.params.businessId);
    const business = selectBusiness(state.entities, businessId);
    const reviews = selectReviewsForBusiness(state.entities, business);
    return {
        businessId,
        business,
        reviews
    };
};

const mDTP = dispatch => ({
    fetchBusiness: id => dispatch(fetchBusiness(id)),
    deleteReview: id => dispatch(deleteReview(id))
});

export default connect(mSTP, mDTP)(BusinessShow);