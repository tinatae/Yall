import React from 'react';
import { withRouter } from 'react-router-dom';
import { render } from 'react-dom';

const Footer = () => ( 
    <div className="footer">
        <div className="adspace-wrapper">
            <div className="ad-wrap">
                <div className="ad-move">
                    <div id="ad">★★★★★</div>
                    <div id="ad">I think it would be fun to advertise in this space so imagine reading local promotions about say.. ice cream here</div>
                    <div id="ad">Sweet, chocolate chip ice cream like the one taken by Benjamín Hazael Rojas García on my login page</div>
                    <div id="ad"><span id="true-ad"> - Buy one get one free at Sugar Lane Corner Shoppe ! - </span>it could be <span id="delightful">delightful!</span></div>
                    <div id="ad">Please see my Graphics Credits link for all photography & art credits and thank you again for visiting !</div>
                    <div id="ad">★★★★★</div>
                    <div id="ad">p.s. This message will play on loop, so feel free to hover your cursor over this area to make it stop</div>
                    <div id="ad">( Also, definitely look into getting that ice cream ☺ )</div>
                </div>
            </div>
        </div>
    </div> 
);


export default Footer;