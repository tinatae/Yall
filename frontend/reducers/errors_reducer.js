import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({    // combineReducers ACCEPTS A SINGLE ARGUMENT: OBJECT WHOSE PROPERTIES WILL REPRESENT PROPERTIES OF OUR APPLICATION state
    session: sessionErrorsReducer   // & VALUES THAT CORRESPOND TO DOMAIN-SPECIFIC REDUCING FUNCTIONS
});

export default errorsReducer;