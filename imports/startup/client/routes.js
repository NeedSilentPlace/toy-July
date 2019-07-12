import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../../ui/pages';
import Signup from '../../ui/pages/Signup';
import PostEdit from '../../ui/pages/PostEdit';
import Login from '../../ui/pages/Login';

import Test from '../../ui/pages/Test';

export const renderRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/blog/write" component={PostEdit} />
    </Switch>
  </Router>
);
