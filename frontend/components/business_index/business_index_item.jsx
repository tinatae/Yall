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
        const { name, average_rating, category, dollarmaker, photoUrls, recentreview, reviewcount, phonenumber, address1, city } = this.props.business;

        const starTable = {
            5: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
            4.5: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span>,
            4: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
            3.5: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span>,
            3: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
            2.5: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span>,
            2: <span><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
            1.5: <span><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span>,
            1: <span><i className="fas fa-star"></i></span>,
            0.5: <span><i className="fas fa-star-half"></i></span>,
        }

        function bizStars(avg) {

            if (avg >= 4.95) {
                return starTable[5]
            } else if (avg >= 4.5) {
                return starTable[4.5]
            } else if (avg >= 4) {
                return starTable[4]
            } else if (avg >= 3.5) {
                return starTable[3.5]
            } else if (avg >= 3) {
                return starTable[3]
            } else if (avg >= 2.5) {
                return starTable[2.5]
            } else if (avg >= 2) {
                return starTable[2]
            } else if (avg >= 1.5) {
                return starTable[1.5]
            } else if (avg >= 1) {
                return starTable[1]
            } else if (avg >= 0.5) {
                return starTable[0.5]

            }
        }

        return (
            <div onClick={this.handleClick}>
                <div className="index-item">
                    <div id="index-pic">
                        <img src={photoUrls[0]} />
                    </div>

                    <div className="index-item-info">
                        <div className="index-item-info-grid">
                            <div id="col1">
                                <div id="name">{name}</div>
                             
                                <div id="rating-block">
                                    <span id="rating">{bizStars(average_rating) || 'No Reviews Yet'}</span>
                                    <span id="reviewcount">{reviewcount}</span>
                                </div>
                            
                                <div id="pricepoint-block">
                                    <div id="pricepoint">{dollarmaker}</div>
                                    <span id="bullet">•</span>
                                    <div id="category">{category}</div>   
                                </div>
                            </div>    
                        
                            <div id="col2">
                                <div>({phonenumber.slice(0, 3)}){phonenumber.slice(3, 6)}-{phonenumber.slice(6, 10)}</div>
                                <div>{address1}</div>                    
                                <div>{city}</div>
                            </div>
                        </div>

                        <div id="recentreview">
                            <div id="werd">Word on the Street:</div>
                            <div>"{recentreview}"</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default withRouter(BusinessIndexItem);

{/* <i className="far fa-building"></i> */}