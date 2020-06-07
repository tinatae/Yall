import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchbarForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: "",
            searchCity: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    };

    handleSubmit(e) {
        e.preventDefault();

        const formattedQuery = this.state.searchQuery ? this.state.searchQuery.split(" ").map(part => part[0].toUpperCase() + part.slice(1).toLowerCase()).join(" ") : "nothing";

        const formattedCity = this.state.searchCity ? this.state.searchCity.split(" ").map(part => part[0].toUpperCase() + part.slice(1).toLowerCase()).join(" ") : "nope";

        if (this.props.location.pathname !== '/businesses' && this.props.location.pathname !== '/credits') {       // HOMEPAGE ONLY
            if (this.state.searchQuery !== '' && this.state.searchCity !== '') {                                   // BOTH CITY & QUERY
                this.props.changeFilter('searchCity', formattedCity)
                return this.props.history.push(`/businesses?query=${formattedQuery}`)

               } else if (this.state.searchCity !== '' && this.state.searchQuery === ''){                           // JUST CITY

                this.props.changeFilter('searchCity', formattedCity)
                return this.props.history.push('/businesses');
           

               } else if (this.state.searchQuery !== '' && this.state.searchCity === ''){                           // JUST QUERY
                    return this.props.history.push(`/businesses?query=${formattedQuery}`)
               } else {
                   return this.props.history.push('/businesses')
               }
        } else if (this.props.location.pathname === '/businesses') {                                                // SHOULD ONLY BE ON BUSINESSES PAGE IN SINGLE SEARCH QUERY BAR
            return this.props.updateFilter('searchQuery', formattedQuery)    
        }
    };

    render() {
        const {searchQuery, searchCity} = this.state;

        if (this.props.location.pathname === "/credits") {
            return null
        } else if (this.props.location.pathname === "/businesses" || this.props.location.pathname !== "/") {
            return (
                <div className="navsearch">
                    <form onSubmit={this.handleSubmit}>
                        <div id="navsearch1"><input type="text" placeholder="  So what are we looking for.." value={searchQuery} onChange={this.update('searchQuery')} /></div>
                        <div><input id="white-magnifying-glass" type="image" src="/white-magnifying-glass.svg" alt="Submit Query" /></div>
                    </form>
                </div>
            )
        } else {
            return (
                <div>         
                    <form onSubmit={this.handleSubmit}>
                        <div className="searchbar-form">
                            <div id="searchbar-container">                 
                                <div id="subsearch1">Find<input type="text" placeholder="  So what are we looking for.." value={searchQuery} onChange={this.update('searchQuery')} /></div>        
                                <div id="subsearch2">&emsp;Near<input type="text" placeholder="San Francisco Bay Area" value={searchCity} onChange={this.update('searchCity')} /> </div>                                          
                            </div>
                            <div><input id="white-magnifying-glass" type="image" src="/white-magnifying-glass.svg" alt="Submit Query" /></div>
                        </div>
                    </form>        
                </div>
            )
        }  
    };
};

export default withRouter(SearchbarForm);

// ------------------------------------------------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { withRouter, Link } from 'react-router-dom';

// const handleQuery = (filter, changeFilter) => e => (
//     changeFilter(filter, e.currentTarget.value)
// );

// const update = (field) = e => {
//     return e => this.setState({ [field]: e.currentTarget.value });
// };


// const SearchbarForm = ({ searchQuery, changeFilter}) => (
//     <div>
//         <form onSubmit={this.handleQuery('searchQuery', changeFilter)}>
//             <input type="text" placeholder="So what are we looking for.." value={searchQuery} onChange={this.update('searchQuery')}/>

//             <input type="submit" value="Look Me Up!" />
//         </form>
//     </div>

// );

// export default withRouter(SearchbarForm);

// ----------------------------------------------------------

// onChange = { this.update('searchQuery') }

{/* <input type="text" placeholder="So what are we looking for" value={searchQuery} onChange={handleQuery('searchQuery', updateFilter)} /> */ }
