import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import Greeting from './greeting';


const mSTP = (state) => {
    let currentUserId = state.session.id;

    if (currentUserId)
        return { currentUser: state.entities.users[currentUserId] };
    else
        return { currentUser: null }
};


const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Greeting);