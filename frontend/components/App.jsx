import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SearchContainer from './businesses/search_container';
import BusinessShowContainer from './business/business_show_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>Happy Wednesday!</h1>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={SearchContainer} />
            <Route path="/businesses/:businessId" component={BusinessShowContainer} />
        </Switch>
    </div>
);

export default App;