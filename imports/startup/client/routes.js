import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../../ui/pages';
import Signup from '../../ui/pages/Signup';


export const renderRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  </Router>
)