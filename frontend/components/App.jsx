import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

// import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import SearchContainer from './search/search_container';
import BusinessFormContainer from './business_form/business_form_container';
import BusinessShowContainer from './business_show/business_show_container';
// import LandingPageContainer from './greeting/landing_page_container';
// import ReviewFormContainer from './business_show/review_form_container';
import HomepageContainer from './homepage/homepage_container';
import NavbarContainer from './navbar/navbar_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div> 
        <header className="main-header">  
            <div>y allr</div>
            {/* <GreetingContainer /> */}
            <NavbarContainer />
           <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
           </Switch>   
        </header>
            
        <Switch>    
            <ProtectedRoute exact path="/businesses/new" component={BusinessFormContainer} />
            <Route path="/businesses/:businessId" component={BusinessShowContainer} />
            <Route exact path="/businesses" component={SearchContainer} />
            <Route exact path="/" component={HomepageContainer} />
        </Switch>
    </div>
);

export default App;
