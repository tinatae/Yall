import { RECEIVE_BUSINESSES, RECEIVE_BUSINESS, RECEIVE_REVIEW } from '../actions/business_actions';

const businessesReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            return Object.assign({}, state, {[action.business.id]:action.business});
        case RECEIVE_REVIEW:
            const {review, average_rating} = action;
            const nextState = Object.assign({}, state);
            nextState[review.business_id].reviewIds.push(review.id);
            nextState[review.business_id].average_rating = average_rating;
            return newState;
        default:
            return state;
    }
};

export default businessesReducer;