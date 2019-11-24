import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import businessesReducer from './businesses_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    businesses: businessesReducer,
    users: usersReducer,
    reviews: reviewsReducer
});

export default entitiesReducer;