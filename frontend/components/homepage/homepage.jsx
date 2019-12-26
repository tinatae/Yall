import React from 'react';
import SearchbarFormContainer from '../searchbar/searchbar_form_container';

// import { updateFilter } from '../../actions/filter_actions';
// import { withRouter } from 'react-router-dom'

class Homepage extends React.Component {
    constructor(props) {
        super(props)
    };


    componentDidMount() { 

        var homescreen = document.getElementById("homepics");
        var fadeComplete = function(e) { homescreen.appendChild(arr[0]);};
        var arr = homescreen.getElementsByTagName("img");
        for (let i = 0; i < arr.length; i++) {
            arr[i].addEventListener("animationend", fadeComplete, false);
        }
    };

    render() {
        return (
            <div className="homepage">
                <div id="homepics">
                    <img className="background" key={1} src={window.home1URL} />
                    <img className="background" key={2} src={window.home2URL} />
                    <img className="background" key={3} src={window.home3URL} />
                    <img className="background" key={4} src={window.home4URL} />
                    <img className="background" key={5} src={window.home5URL} />
                </div>
                <div className="searchbar-container">
                    <SearchbarFormContainer />
                </div>
            </div>
        )
    }
};

export default Homepage;


{/* <img className="background" src={window.home1} /> */}

