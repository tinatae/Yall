import React from 'react';
import SearchbarFormContainer from '../searchbar/searchbar_form_container';

// import { updateFilter } from '../../actions/filter_actions';
// import { withRouter } from 'react-router-dom'

class Homepage extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        // const {benches} = this.state;

        return (
            <div>
                <h2>Hello</h2>
                <SearchbarFormContainer />
                {/* // benches={benches} /> */}
            </div>
        )
    }
}

export default Homepage;

// const Homepage = ({fetchBenches}) => (
//     <div>
//         <h2>Hello!</h2>
//         <SearchBarForm 
//         fetchBenches={fetchBenches} />
//     </div>
// );
