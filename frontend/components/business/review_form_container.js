import {connect} from 'react-redux';

import {createReview} from '../../actions/business_actions';
import ReviewForm from './review_form';

const mSTP = (state) => {
    return ({
        userId: state.session.id
    })
}
const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review))
});

export default connect(mSTP, mDTP)(ReviewForm);