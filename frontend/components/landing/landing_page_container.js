import {connect} from 'react-redux';
import LandingPage from './landing_page';

const mSTP = ({ session }) => {
    return session
};

// const mDTP = dispatch => ({
//     null
// })

export default connect(mSTP, null)(LandingPage);