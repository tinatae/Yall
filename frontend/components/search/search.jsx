import React from 'react';
import BusinessMap from '../business_map/business_map';
import BusinessIndex from './business_index';
import FilterForm from './filter_form';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }; 

   componentDidMount() {
        const query = new URLSearchParams(this.props.location.search).get("query");
 
        if (query) {
            this.props.updateFilter('searchQuery', query);
        }
   }

    render () {
        const { businesses, minPricepoint, maxPricepoint, filterCategory, filterOpenNow, filterDelivery, filterTakeout, filterRating, updateFilter, searchQuery, refreshFilter } = this.props;

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
                            refreshFilter={refreshFilter}
                        />
                </div>
                <div className="indexpage-grid">
                    <div className="indexpage-businesses">
                        <BusinessIndex 
                            businesses={businesses}
                            updateFilter={updateFilter}
                            searchQuery={searchQuery}
                        />
                    </div>
                    <div className="indexpage-map">
                        <h2>So Where Are We Going!</h2>
                        <BusinessMap
                            businesses={businesses}
                            updateFilter={updateFilter}
                            singleBusiness={false}            
                        />
                    </div>
                </div>   
            </div>
        )
    }
}

export default Search;




