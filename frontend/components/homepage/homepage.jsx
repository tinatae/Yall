import React from 'react';
import SearchbarFormContainer from '../searchbar/searchbar_form_container';

// import { updateFilter } from '../../actions/filter_actions';
// import { withRouter } from 'react-router-dom'

class Homepage extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className="homepage">
                <img src={window.home1URL} className="background"/>
                <br/>
                <SearchbarFormContainer />
            </div>
        )
    }
}

export default Homepage;

/* const Homepage = ({fetchBenches}) => (
     <div>
         <h2>Hello!</h2>
         <SearchBarForm 
         fetchBenches={fetchBenches} />
     </div>
); */

      {/* <img className="background" src={window.home1} /> */}