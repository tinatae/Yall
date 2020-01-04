import React from 'react';
import BusinessMap from '../business_map/business_map';
import BusinessIndex from './business_index';
import FilterForm from './filter_form';
// import { withRouter } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: "",
            // filterOpenNow: "Always"
        };

        // this.handleClearFilter = this.handleClearFilter.bind(this);
        // this.forceUpdate = this.forceUpdate.bind(this);
    };

    // componentDidMount() { 
    // };

    // componentDidUpdate() {
    //     if (state.filterOpenNow === "Yes") {
    //         this.forceUpdate();
    //     }
    // };

    // handleClearFilter(clearFilter) {
    //     this.clearFilter;
    //     this.forceUpdate();
    // };

    // update(field) {
    //     return e => this.setState({})
    // }

    render () {
        const { businesses, minPricepoint, maxPricepoint, filterCategory, filterOpenNow, filterDelivery, filterTakeout, filterRating, updateFilter, searchQuery, clearFilter } = this.props;

        return (
            <div className="indexpage">
                <div className="indexpage-filters">
                    <h3>What are you Looking For?</h3>
                        <FilterForm 
                            searchQuery={searchQuery}
                            minPricepoint={minPricepoint} 
                            maxPricepoint={maxPricepoint}
                            updateFilter={updateFilter}
                            filterCategory={filterCategory}
                            filterOpenNow={filterOpenNow}
                            filterDelivery={filterDelivery}
                            filterTakeout={filterTakeout}
                            // filterRating={filterRating}
                        />
                        <button onClick={clearFilter}>Clear</button>
                </div>
                <div className="indexpage-grid">
                    <div className="indexpage-businesses">
                        <BusinessIndex 
                            businesses={businesses}
                            updateFilter={updateFilter}
                            searchQuery={searchQuery}
                            clearFilter={clearFilter}
                            // selectReviewsForBusiness={selectReviewsForBusiness}
                        />
                    </div>
                    <div className="indexpage-map">
                        <h2>So Where Are We Going!</h2>
                        <BusinessMap
                            businesses={businesses}
                            updateFilter={updateFilter}
                            singleBusiness={false}
                            clearFilter={clearFilter}
                        />
                    </div>
                </div>   
            </div>
        )
    }
}

export default Search;


// componentDidMount() {
    // const query = new URLSearchParams(this.props.location.search).get("query");
    // if (query !== "") {
    //     this.setState({[this.state.searchQuery]: query});

    //     this.props.updateFilter('searchQuery', Object.assign({}, this.state));
    // };
    // return Object.assign({}, this.state)
    // console.log(this.state);   
// };

