import * as Utils from '../util/business_api_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveBusinesses = businesses => ({
    type: RECEIVE_BUSINESSES,
    businesses
});

export const receiveBusiness = ({ business }) => ({
    type: RECEIVE_BUSINESS,
    business
});

export const receiveReview = ({ review, rating, author }) => ({
    type: RECEIVE_REVIEW,
    review, rating, author
});

export const createReview = review => dispatch => (
    Utils.createReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
);

export const fetchBusinesses = () => dispatch => (
    Utils.fetchBusinesses().then(businesses => (
        dispatch(receiveBusinesses(businesses))
    ))
);

export const fetchBusiness = id => dispatch => (
    Utils.fetchBusiness(id).then(business => (
        dispatch(receiveBusiness(business))
    ))
);
