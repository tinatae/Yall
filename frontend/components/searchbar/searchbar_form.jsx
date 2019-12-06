import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Link } from 'react-router-dom';

class SearchbarForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToEverything = this.navigateToEverything.bind(this);
    };
    
    navigateToEverything() {
        this.props.history.push('/businesses/')
    };

    update(field) {
        return e => {this.setState({ [field]: e.currentTarget.value })}
    };

    handleSubmit(e) {
        e.preventDefault();

        // this.props.updateFilter = (filter, updateFilter) => e => (
        //     updateFilter(filter, parseInt(e.currentTarget.value))
        // );
   
        console.log(this.state.searchQuery)
        this.props.history.push(`/businesses?searchQuery=${this.state.searchQuery}`)
    };

   // handleQuery = (filter, updateFilter) => e => (
   //     updateFilter(filter, e.currentTarget.value)
   // );
 

    render() {
        const { searchQuery } = this.state.searchQuery;
        // const {updateFilter} = this.props.updateFilter;
        // const {changeFilter} = this.props.changeFilter;

        return (
            <div>
                <div>
                    {/* <form onSubmit={this.updateFilter}> */}
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="So what are we looking for.." value={searchQuery} onChange={this.update('searchQuery')} />

                        <input type="submit" value="Look Me Up!" />
                    </form>
                </div>

                <div>
                    <button onClick={this.navigateToEverything}>Or just show me everything</button>
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

// const handleQuery = (filter, updateFilter) => e => (
//     updateFilter(filter, e.currentTarget.value)
// );

// const update = (field) => e => {
//     return e => {this.setState({ [field]: e.currentTarget.value })}
// };


// const SearchbarForm = ({ searchQuery, updateFilter, handleQuery, update}) => (
//     <div>
//         <span>Let's sort this shall we. Filter Results:</span>
//         <br />

//         <form onSubmit={this.handleQuery('searchQuery', updateFilter)}>
//             <input type="text" placeholder="So what are we looking for.." value={searchQuery} onChange={this.update('searchQuery')}/>

//             <input type="submit" value="Look Me Up!" />
//         </form>
//     </div>

// );

// export default withRouter(SearchbarForm);

// ----------------------------------------------------------

// onChange = { this.update('searchQuery') }

{/* <input type="text" placeholder="So what are we looking for" value={searchQuery} onChange={handleQuery('searchQuery', updateFilter)} /> */ }
