import React from 'react';
import { withRouter } from 'react-router-dom';
import BusinessShowContainer from '../business_show/business_show_container';

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        const businessId = this.props.business.id;
        this.props.history.push(`/businesses/${businessId}`);
    }

    render() {
        const { name, average_rating, category, dollarmaker, photoUrls, recentreview, reviewcount } = this.props.business;
       
        // const reviewCount = reviewIds.length
        // if (reviewIds !== null) {
        //     const { review } = this.props.business.reviews[Object.keys(this.props.business.reviews).length - 1];  
        // };
        // const reviews = this.props.selectReviewsForBusiness(this.props.businesses, this.props.business);

        return (
            <div onClick={this.handleClick}>
                <div className="index-item">
                    <img src={photoUrls[0]} />
                    <div className="index-item-info">
                        <span id="name">{name}</span>
                        <br />
                        <span id="rating">{average_rating || 'No Reviews Yet'}</span>
                        <span id="reviewcount">{reviewcount}</span>
                        <br />
                        <span id="pricepoint">{dollarmaker}</span> 
                        <span id="bullet">•</span>
                        <span id="category">{category}</span>   
                        <br />
                        <span id="recentreview">Word on the Street: {recentreview}</span>
                    </div>
                </div>
            </div>
        );
    };
};

export default withRouter(BusinessIndexItem);

{/* <span>Review: {reviews}</span> */}