import {connect} from 'react-redux';
import { selectBusiness } from '../../reducers/selectors';

import {createReview} from '../../actions/business_actions';
import ReviewForm from './review_form';

const mSTP = (state, {match}) => {
    const businessId = parseInt(match.params.businessId);
    const business = selectBusiness(state.entities, businessId);
    return {
        businessId,
        business
    }
}

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review))
});

export default connect(mSTP, mDTP)(ReviewForm);