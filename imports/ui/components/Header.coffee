import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../stylesheets/header.less';

export default Header = (props) ->
  { children, user } = props

  logOut = ->
    Meteor.logout (err) -> if err then console.log err else null

  activeLeft = ->
    if !user
      null
    else
      <>
        <Button 
          as={Link} 
          to="/blog/write" 
          content="Blog Write" 
        />
        <Button 
          as={Link}
          to="/blog/favorites"
          content="Favorite"
          />
      </>

  changeRightView = ->
    if !user
      <>
        <Button 
          as={Link} 
          to="/login" 
          content="LOG IN"
        />
        <Button 
          as={Link} 
          to="/signup" 
          content="SIGN UP" 
        />
      </>
    else
      <>
        <Button 
          as={Link} 
          to="/user/edit" 
          content="ACCOUNT"
        />
        <Button content="LOG OUT" onClick={logOut}/>
      </>

  <div className="root-container">
    <div className="header-container">
      <div className="post-controller">
        {activeLeft()}
      </div>
      <div className="header-title">
        <Link to="/">Hank Link</Link>
      </div>
      <div className="login-controller">
        {changeRightView()}
      </div>
    </div>
    {children}
  </div>
      