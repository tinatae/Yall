import React from 'react';
import BusinessMap from '../business_map/business_map';
import BusinessIndex from './business_index';
import FilterForm from './filter_form';
// import { withRouter } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ""
        } 
    };

    componentDidMount() {
        // const query = new URLSearchParams(this.props.location.search).get("query");
        // if (query !== "") {
        //     this.setState({[this.state.searchQuery]: query});

        //     this.props.updateFilter('searchQuery', Object.assign({}, this.state));
        // };
        // return Object.assign({}, this.state)
        // console.log(this.state);   
    };

    render () {
        const { businesses, minPricepoint, maxPricepoint, filterCategory, filterRating, updateFilter, searchQuery } = this.props;

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
                            filterRating={filterRating}
                        />
                </div>
                    <div className="indexpage-grid">
                        <div className="indexpage-businesses">
                            <BusinessIndex 
                            businesses={businesses}
                            updateFilter={updateFilter}
                            searchQuery={searchQuery}
                            // selectReviewsForBusiness={selectReviewsForBusiness}
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

// const Search = ({ businesses, minPricepoint, maxPricepoint, filterCategory, filterRating, updateFilter, searchQuery }) => (
   
//     <div className="indexpage">
//         <div className="indexpage-filters">
//             <h3>What are you Looking For?</h3>
//                 <FilterForm 
//                     // searchQuery={searchQuery}
//                     minPricepoint={minPricepoint}
//                     maxPricepoint={maxPricepoint}
//                     updateFilter={updateFilter}
//                     filterCategory={filterCategory}
//                     filterRating={filterRating}
//                 />
//         </div>
//         <div className="indexpage-grid">
//             <div className="indexpage-businesses">
//                 <BusinessIndex 
//                 businesses={businesses}
//                 updateFilter={updateFilter}
//                 searchQuery={searchQuery}
//                 // selectReviewsForBusiness={selectReviewsForBusiness}
//                 />
//             </div>
//             <div className="indexpage-map">
//                 <h2>So Where Are We Going!</h2>
//                 <BusinessMap
//                     businesses={businesses}
//                     updateFilter={updateFilter}
//                     singleBusiness={false}
//                 />

//             </div>
//         </div>   
//     </div>
// );

export default Search;


