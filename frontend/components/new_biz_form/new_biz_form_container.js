import {connect} from 'react-redux';
import NewBizForm from './new_biz_form';
import {createBusiness} from '../../actions/business_actions';

const mSTP = (state) => ({
    state
});

const mDTP = dispatch => ({
    createBusiness: business => dispatch(createBusiness(business))
});

export default connect(mSTP, mDTP)(NewBizForm);

// const mSTP = (state, { location }) => ({
// lat: new URLSearchParams(location.search).get('lat'),
// lng: new URLSearchParams(location.search).get('lng')