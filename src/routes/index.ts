import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Users = lazy(() => import('./pages/Users'));
const Posts = lazy(() => import('./pages/Posts'));

const Routes = () => (
  <Router>
    <Suspense fallback={<h3>Loading...</h3>}>
      <Switch>
        <Route exact path="/dfa" component={Users} />
        <Route exact path="/case" component={Posts} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
