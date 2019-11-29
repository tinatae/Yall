// import React from 'react';

// class SearchBar extends React.Component {
//     constructor(props) {
//         super(props)
//     };

//     this.state = {
//         query: "",
//         data: [],
//         filteredData: [],
//     };

//     handleInputChange(e) {
//         e.preventDefault();
//         const query = e.target.value;

//         this.setState(prevState => {
//             const filteredData = prevState.data.filter(ele => {
//                 return ele.name.toLowerCase().includes(query.toLowerCase());
//             });

//             return {
//                 query,
//                 filteredData
//             };
//         });
//     };

//     getData = () => {
//         fetch(`http://localhost:300/#/businesses`)
//         .then(response => response.json())
//         .then(data => {
//             const {query} = this.state;
//             const filteredData = data.filter(ele => {
//                 return ele.name.toLowerCase().includes(query.toLowerCase());
//             });

//             this.setState({
//                 data, 
//                 filteredData
//             });
//         });
//     };

//     componentWillMount() {
//         this.getData();
//     }

//     render() {
//         return (
//             <div>
//                 <form>
//                     <input placeholder="Search for..." value={this.state.query} onChange={this.handleInputChange} />
//                 </form>
//                 <div>{this.state.filteredData.map(i => <p>{i.name}</p>)} </div>
//             </div>
//         )
//     };
// };


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
        this.navigateToSearch = this.navigateToSearch.bind(this);
    };


    navigateToSearch() {
        this.props.history.push('/businesses')
    };

    componentDidMount() {
        this.props.fetchBusinesses();
    };

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    };

    handleSubmit(e) {
        e.preventDefault();

        const searchQuery =
            this.fetchBusinesses

        this.navigateToSearchResult();
    };

    // handleClick(searchQuery) {
    // this.props.history.push({               // USES ROUTER TO REDIRECT TO BenchForm URL PROVIDING lat & lng AS QUERY PARAMS SO DON'T NEED TO MANUALLY ENTER
    //     pathname: '/',
    //     // search: `lat=${coords.lat}&lng=${coords.lng}`       // NOTICE data SENT ALONG WITH NEW pathname
    //     search: `searchQuery=${searchQuery}`
    //     });
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const benchId = parseInt(this.props.match.params.benchId);
    //     const review = Object.assign({}, this.state, { bench_id: benchId });
    //     this.props.createReview(review);
    //     this.navigateToBenchShow();
    // }

    render() {
        const { searchQuery } = this.state;


        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={searchQuery} onChange={this.update('searchQuery')} />
                        <input type="submit" value="Look Me Up!" />
                    </form>
                </div>

                <div>
                    <button onClick={this.navigateToSearch}>Or just show me my options</button>
                </div>
            </div>
        )
    };
};

export default withRouter(SearchbarForm);