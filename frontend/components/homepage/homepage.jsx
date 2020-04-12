import React from 'react';
import SearchbarFormContainer from '../searchbar/searchbar_form_container';
import {withRouter} from 'react-router-dom';

class Homepage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            filterCategory: "Restaurants",
            filterDelivery: "Yes"
        };

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleDeliveryChange = this.handleDeliveryChange.bind(this);
        this.reroute = this.reroute.bind(this);
        this.goCredits = this.goCredits.bind(this);
    };

    componentDidMount() { 
        const homescreen = document.getElementById("homepics");
        const fadeComplete = function(e) { homescreen.appendChild(arr[0]);};
        const arr = homescreen.getElementsByTagName("img");
        for (let i = 0; i < arr.length; i++) {
            arr[i].addEventListener("animationend", fadeComplete, false);
        }
    };

    reroute(num) {
        return e => {
            this.props.history.push(`/businesses/${num}`)
        }
    }

    goCredits(e) {
        return(e) => {
            this.props.history.push('/credits')
        }
    }

    handleCategoryChange(e) {
        this.setState({ filterCategory: e.currentTarget.value });
        this.props.changeFilter('filterCategory', this.state.filterCategory);
        this.props.history.push('/businesses?query=$Restaurants')
    };

    handleDeliveryChange(e) {
        e.preventDefault();
        this.setState({ filterDelivery: e.currentTarget.value });
        this.props.changeFilter('filterDelivery', this.state.filterDelivery);
        this.props.history.push('/businesses?query=$Delivery')
    };

    render() {
        const { filterCategory, filterDelivery} = this.state;
  
        return (
            <div className="homepage">
                <div id="homepics">
                    <img title="Grab Coffee at Hola Ola" className="background" key={1} src={window.home1URL} onClick={this.reroute(3)}/>
                    <img title="Check-Out the Spring Appetizer at Katagama" className="background" key={2} src={window.home2URL} onClick={this.reroute(8)}/>
                    <img title="Enjoy a tasty bowl of Noodles at Eastern Market Hall" className="background" key={3} src={window.home3URL} onClick={this.reroute(6)}/>
                    <img title="Try the 'Smoke Show' at the Tumbler Room" className="background" key={4} src={window.home4URL} onClick={this.reroute(5)}/>
                </div>
        
                <h1 className="yallr-name" onClick={this.goCredits()}>
                    y allr
                    <i className="far fa-snowflake"></i>
                </h1>
                <div className="searchbar-container">
                    <SearchbarFormContainer />
                </div>

                <div className="homepage-categories">
                    <div id="restaurants-link" style={{ textDecoration: 'none' }} onClick={this.handleCategoryChange}>
                        <i className="fas fa-utensils"></i>
                        <span>Restaurants</span>
                    </div>
                    <div id="delivery-link" style={{ textDecoration: 'none' }} onClick={this.handleDeliveryChange}>
                        <i className="far fa-paper-plane"></i>
                        <span>Delivery</span>   
                    </div>
                </div>
            </div>
        )
    }
};

export default withRouter(Homepage);



