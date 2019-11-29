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
                        <input type="text" placeholder="What are we looking for.." value={searchQuery} onChange={this.update('searchQuery')} />
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