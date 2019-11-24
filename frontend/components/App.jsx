import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import SearchContainer from './search/search_container';
import BusinessFormContainer from './business_form/business_form_container';
import BusinessShowContainer from './business_show/business_show_container';
// import LandingPageContainer from './greeting/landing_page_container';
// import ReviewFormContainer from './business_show/review_form_container';
// import Home from './home/home';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
            <GreetingContainer />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/businesses/new" component={BusinessFormContainer} />
            <Route path="/businesses/:businessId" component={BusinessShowContainer} />
            <Route exact path="/" component={SearchContainer} />
        </Switch>
    </div>
);

export default App;