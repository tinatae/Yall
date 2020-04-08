import React from 'react';
import { withRouter } from 'react-router-dom';
import { render } from 'react-dom';

const Footer = () => ( 
    <div className="footer">
        <div className="adspace-wrapper">
            <div className="ad-wrap">
                <div className="ad-move">
                    <div id="ad">★★★★★</div>
                    <div id="ad">I think it would be fun to advertise in this space so imagine reading about local promotions here</div>
                    <div id="ad"><span id="sugar-lane"> - Buy one get one free at the Sugar Shoppe - </span><span id="bring-friend">Bring a Friend!</span></div>
                    <div id="ad"><span id="blue-lagoon">Happy Hour Specials at the Blue Lagoon 5-8 PM!</span> $8 Mai Tais!</div>
                    <div id="ad">★★★★★</div>
                    <div id="ad">This message will play on repeat, so feel free to put it on pause by placing your cursor over this area</div>
                    <div id="ad">( bc I get that this could get annoying! ☺ )</div>
                    <div id="ad">But as a site visitor, I actually think I would want to read all of these</div>    
                    <div id="ad">- something good could show up!</div>    
                    <div id="ad">★★★★★</div>
                </div>
            </div>
        </div>
    </div> 
);


export default Footer;