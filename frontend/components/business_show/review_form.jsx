import React from 'react';
import {withRouter} from 'react-router-dom';

var userClicked = false;

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            body: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateStar = this.updateStar.bind(this);
        this.changeStar = this.changeStar.bind(this);
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

    updateStar(e, num) {
        const allStars = e.target.parentElement.getElementsByClassName("form-star")
        userClicked = true;

        if (num === 5) {
            for (let i = 1; i <= 5; i++) {
                allStars[i-1].style.color = "orange"
            }
        } else {
            for (let i = 1; i <= num; i++) {
                allStars[i-1].style.color = "orange"
            }
            for (let j = num+1; j <= 5; j++) {
                allStars[j-1].style.color = "grey"
            }
        }
        return this.setState({ rating: num });
    }

    changeStar(e, num) {
        const allStars = e.target.parentElement.getElementsByClassName("form-star")

        if (!userClicked) {
            if (num === 5) {
                for (let i = 1; i <= 5; i++) {
                    allStars[i-1].style.color = "red"
                }
            } else {
                for (let i = 1; i <= num; i++) {
                    allStars[i-1].style.color = "red"
                }
                for (let j = num+1; j <= 5; j++) {
                    allStars[j-1].style.color = "grey"
                }
            }      
        }
    }

    render() {
        const name = this.props.business.name
 
        return (
            <div className="review-form">
                              
                <h2 id="bizname">{name}</h2>
                <form onSubmit={this.handleSubmit}>
                    <div id="please-rate">Please rate this business:</div>

                    <div className="changing-stars">
                        <div id="hover-stars">       
                            <i className="fas fa-star form-star" onMouseOver={e => this.changeStar(e, 1)} onClick={e => this.updateStar(e, 1)}></i>
                            <i className="fas fa-star form-star" onMouseOver={e => this.changeStar(e, 2)} onClick={e => this.updateStar(e, 2)}></i>
                            <i className="fas fa-star form-star" onMouseOver={e => this.changeStar(e, 3)} onClick={e => this.updateStar(e, 3)} ></i>
                            <i className="fas fa-star form-star" onMouseOver={e => this.changeStar(e, 4)} onClick={e => this.updateStar(e, 4)} ></i>
                            <i className="fas fa-star form-star" onMouseOver={e => this.changeStar(e, 5)} onClick={e => this.updateStar(e, 5)} ></i>                    
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

/* <div id="click-stars">
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
</div> */
