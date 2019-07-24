import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../stylesheets/header.less';

export default function Header(props) {
  const { children, user } = props;

  function logOut() {
    Meteor.logout(err => err ? console.log(err) : null);
  }

  function activeLeft() {
    if(!user) {
      return null;
    }
    return (
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
    );
  }

  function changeRightView() {
    if(!user) {
      return (
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
      );
    }
    return (
      <>
        <Button 
          as={Link} 
          to="/user/edit" 
          content="ACCOUNT"
        />
        <Button content="LOG OUT" onClick={logOut}/>
      </>
    );
  }

  return (
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
  );
}
