import {connect} from 'react-redux';
import BusinessForm from './business_form';
import {createBusiness} from '../../actions/business_actions';

const mSTP = (state) => ({
    state
});

const mDTP = dispatch => ({
    createBusiness: business => dispatch(createBusiness(business))
});

export default connect(mSTP, mDTP)(BusinessForm);

// const mSTP = (state, { location }) => ({
// lat: new URLSearchParams(location.search).get('lat'),
// lng: new URLSearchParams(location.search).get('lng')