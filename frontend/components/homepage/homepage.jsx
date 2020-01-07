import React from 'react';
import SearchbarFormContainer from '../searchbar/searchbar_form_container';

class Homepage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            filterCategory: "Restaurants",
            filterDelivery: "Yes"
        };

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleDeliveryChange = this.handleDeliveryChange.bind(this);
    };

    componentDidMount() { 
        const homescreen = document.getElementById("homepics");
        const fadeComplete = function(e) { homescreen.appendChild(arr[0]);};
        const arr = homescreen.getElementsByTagName("img");
        for (let i = 0; i < arr.length; i++) {
            arr[i].addEventListener("animationend", fadeComplete, false);
        }
    };

    handleCategoryChange(e) {
        this.setState({ filterCategory: e.currentTarget.value });
        this.props.changeFilter('filterCategory', this.state.filterCategory);
        this.props.history.push(`/businesses?query=${this.state.filterCategory}`)
    };

    handleDeliveryChange(e) {
        e.preventDefault();
        this.setState({ filterDelivery: e.currentTarget.value });
        this.props.changeFilter('filterDelivery', this.state.filterDelivery);
        this.props.history.push(`/businesses?query=${this.state.filterDelivery}`)
    };

    render() {
        const { filterCategory, filterDelivery} = this.state;
  
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
                <div className="homepage-categories">
                    <label>
                        Restaurants
                        <button value="Restaurants" onClick={this.handleCategoryChange}>
                            <img id="paperplane" src="/paper-plane-regular.svg" />
                        </button>
                    </label>
                    <label>
                        Delivery
                        <button value="Yes" onClick={this.handleDeliveryChange}>
                            <img id="paperplane" src="/paper-plane-regular.svg" />
                        </button>
                    </label>

                </div>
            </div>
        )
    }
};

export default Homepage;


{/* <img className="background" src={window.home1} /> */}

// <label>
//     Delivery
//     <button value="Yes" onClick={handleDeliveryChange('filterDelivery', changeFilter)}>
//         <img id="paperplane" src="/paper-plane-regular.svg" />
//     </button>
// </label>

