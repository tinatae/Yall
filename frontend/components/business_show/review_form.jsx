import React from 'react';
import {withRouter} from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: '',
            body: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToBusinessShow = this.navigateToBusinessShow.bind(this);
    }

    navigateToBusinessShow() {
        const url = `/businesses/${this.props.businessId}`
        this.props.history.push(url);
    }

    handleSubmit(e) {
        e.preventDefault();
        const businessId = this.props.businessId;
        const review = Object.assign({}, this.state, { business_id: businessId });
        this.props.createReview(review);
        this.navigateToBusinessShow();
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        const name = this.props.business.name

        return (
            <div className="review-form">
           
                     
                <button onClick={this.navigateToBusinessShow}>Actually, I'd like to do this later!</button>
                     
                 
                <h2 id="bizname">{name}</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <span>Select your rating: </span>
                        <label>★
                            <input type="radio" value="1" onChange={this.update('rating')} />
                        </label>
                        <label>★
                            <input type="radio" value="2" onChange={this.update('rating')} />
                        </label>
                        <label>★
                            <input type="radio" value="3" onChange={this.update('rating')} />
                        </label>
                        <label>★
                            <input type="radio" value="4" onChange={this.update('rating')} />
                        </label>
                        <label>★
                            <input type="radio" value="5" onChange={this.update('rating')} />
                        </label>
                    </div>

                      <br/>
                    <div id="comment-holder">
                        <label>Thoughtful Comment
                            <br/>
                            <input type="textarea" id="comment" placeholder="Your review helps other learn about great local businesses. Please use your best, unbiased judgement when commenting on this business." value={this.state.body} onChange={this.update('body')} />
                        </label>
                    </div>          
                    <input type="submit" value="Post Review" />
                </form>
                    <button onClick={this.navigateToBusinessShow}>Cancel</button>
            </div>
        );
    }
};

export default withRouter(ReviewForm);
