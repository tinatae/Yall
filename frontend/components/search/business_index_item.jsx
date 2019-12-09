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
        const { name, average_rating, category, dollarmaker, photoUrls, recentreview, reviewcount, phonenumber, address1, address2 } = this.props.business;
       
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
                        <div className="index-item-info-grid">
                            <div className="col1">
                                <span id="name">{name}</span>
                             
                                <div id="rating-block">
                                    <span id="rating">{average_rating || 'No Reviews Yet'}</span>
                                    <span id="reviewcount">{reviewcount}</span>
                                </div>
                            
                                <div id="pricepoint-block">
                                    <span id="pricepoint">{dollarmaker}</span>
                                    <span id="bullet">•</span>
                                    <span id="category">{category}</span>   
                                </div>
                            </div>      
                            <div className="col2">
                                <div>{phonenumber}</div>
                                <div>{address1}</div>                    
                                <div>{address2}</div>
                            </div>
                        </div>
                        <div id="recentreview">
                            <div id="werd">Word on the Street:</div>
                            <div>{recentreview || 'No Reviews Yet'}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default withRouter(BusinessIndexItem);