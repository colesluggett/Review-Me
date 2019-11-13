import React from 'react';
import { Route, IndexRoute, Switch } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App';
import UserPage from './components/UserPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
    <Switch>
        <Route path="/" component={App} />
        <Route path="/user/" component={UserPage} />
    </Switch>
);