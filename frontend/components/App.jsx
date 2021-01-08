import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import SearchContainer from './business_index/search_container';
import NewBizFormContainer from './new_biz_form/new_biz_form_container';
import BusinessShowContainer from './business_show/business_show_container';
// import ReviewFormContainer from './business_show/review_form_container';
import HomepageContainer from './homepage/homepage_container';
import NavbarContainer from './navbar/navbar_container';
import CreditContainer from './credit/credit_container';
// import Footer from './navbar/footer';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div> 
        <div className="everything-but-footer">
            <header className="main-header">          
                <NavbarContainer />
                <Switch>
                    <AuthRoute exact path="/login" component={LoginFormContainer} />
                    <AuthRoute exact path="/signup" component={SignupFormContainer} />
            </Switch>   
            </header>
                
            <Switch>    
                <ProtectedRoute exact path="/businesses/new" component={NewBizFormContainer} />
                {/* <ProtectedRoute path="/businesses/:businessId/review" component={ReviewFormContainer} /> */}
                <Route path="/businesses/:businessId" component={BusinessShowContainer} />              
                <Route exact path="/businesses" component={SearchContainer} />
                <Route exact path="/" component={HomepageContainer} />
                <Route exact path="/credits" component={CreditContainer} />
            </Switch>     
            {/* <footer>
                <Footer />
            </footer> */}
        </div>
    </div>
);

export default App;
