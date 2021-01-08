import { RECEIVE_BUSINESS, RECEIVE_REVIEW, DELETE_REVIEW } from '../actions/business_actions';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BUSINESS:
            return Object.assign({}, state, action.reviews);
        case RECEIVE_REVIEW:
            const { review } = action;
            console.log(review)
            return Object.assign({}, state, { [review.id]: review });
        case DELETE_REVIEW:
            return Object.assign({}, state, { [action.review.review.id]: null});
        default:
            return state;
    }
};

export default reviewsReducer;