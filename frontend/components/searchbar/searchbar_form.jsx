import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link } from 'react-router-dom';

class SearchbarForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToEverything = this.navigateToEverything.bind(this);
    };
    
    navigateToEverything() {
        this.props.history.push('/businesses/')
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        const filter = Object.assign({}, this.state);
        this.props.changeFilter('searchQuery', this.state.searchQuery);
           
        this.props.history.push(`/businesses?query=${this.state.searchQuery}`)
    };

    render() {
        // const { searchQuery } = this.props;         // RETURNS CORRECT THING. DON'T CHANGE
 
        // const { query } = this.state;               // RETURNS CORRECT THING. DON'T CHANGE
        const {searchQuery} = this.state;


        return (
            <div className="searchbar-form">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input id="searchbar-input" type="text" placeholder="  Find  So what are we looking for.." value={searchQuery} onChange={this.update('searchQuery')} />      
                        <input type="submit" value="Look Me Up!" />
                    </form>
                </div>

                <div>
                    <button className="everything-button" onClick={this.navigateToEverything}><div>Not Sure. What's Around ?</div></button>
                </div>
            </div>
        )
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
