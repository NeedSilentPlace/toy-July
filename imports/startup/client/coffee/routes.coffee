import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from '../../../ui/pages/Home.coffee'
import Signup from '../../../ui/pages/Signup.coffee'
import UserEdit from '../../../ui/pages/UserEdit.coffee'
import PostEdit from '../../../ui/pages/PostEdit.coffee'
import Login from '../../../ui/pages/Login.coffee'
import Post from '../../../ui/pages/Post.coffee'
import Favorites from '../../../ui/pages/Favorites.coffee'
import NotFound from '../../../ui/components/NotFound.coffee';

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
      <Route component={NotFound} />
    </Switch>
  </Router>
