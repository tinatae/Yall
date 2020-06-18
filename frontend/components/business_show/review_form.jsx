import React from 'react';
import {withRouter} from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            body: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateStar = this.updateStar.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const businessId = this.props.businessId;
        const review = Object.assign({}, this.state, { business_id: businessId });
        this.props.createReview(review);
        this.props.history.push(`/businesses/${this.props.businessId}`)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    updateStar(num) {
        return e => this.setState({ rating: num });
    }

    render() {
        const name = this.props.business.name

        return (
            <div class="review-form">
                              
                <h2 id="bizname">{name}</h2>
                <form onSubmit={this.handleSubmit}>
                    <div id="please-rate">Please rate this business:</div>

                    <div id="click-stars">
                        <div id="star-side">
                            <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                            <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                            <div><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                            <div><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                            <div><i className="fas fa-star"></i></div>
                        </div>

                        <div id="rating-side">                       
                            <div><span>5</span><input type="radio" name="rating" value="5" onClick={this.updateStar(5)} /></div>
                            <div><span>4</span><input type="radio" name="rating" value="4" onClick={this.updateStar(4)} /></div>
                            <div><span>3</span><input type="radio" name="rating" value="3" onClick={this.updateStar(3)} /></div>
                            <div><span>2</span><input type="radio" name="rating" value="2" onClick={this.updateStar(2)} /></div>
                            <div><span>1</span><input type="radio" name="rating" value="1" onClick={this.updateStar(1)} /></div>
                        </div>
                    </div>

                    <div id="comment-holder">
                        <div id="please-rate">Comment</div>            
                        <input type="textarea" 
                            placeholder="Your review helps others learn about great local businesses." 
                            value={this.state.body} 
                            onChange={this.update('body')} 
                        />             
                    </div>    
                          
                    <input id="review-button" type="submit" value="Post Review" />
                </form>
                <button id="cancel-btn" onClick={(e) => this.props.history.push(`/businesses/${this.props.businessId}`)}>Cancel</button>
            </div>
        );
    }
};

export default withRouter(ReviewForm);
