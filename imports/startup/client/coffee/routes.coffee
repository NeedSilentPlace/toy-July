import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../../../ui/pages/Home.coffee';
import Signup from '../../../ui/pages/Signup';
import UserEdit from '../../../ui/pages/UserEdit';
import PostEdit from '../../../ui/pages/PostEdit';
import Login from '../../../ui/pages/Login';
import Post from '../../../ui/pages/Post';
import Favorites from '../../../ui/pages/Favorites';

export renderRoutes = () => 
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/user/edit" component={UserEdit} />
      <Route path="/blog/write" component={PostEdit} />
      <Route path="/blog/edit/:_id" component={PostEdit} />
      <Route path="/blog/favorites" component={Favorites} />
      <Route path="/blog/:_id" component={Post} />
    </Switch>
  </Router>
