import React, { Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { Posts } from '../../api/posts/posts';

import '../stylesheets/header.less';

function Header(props) {
  const { children } = props;
  console.log(props);
  function logOut() {
    Meteor.logout(err => err ? console.log(err) : null);
  }

  return (
    <div>
      <div className="header-container">
        <div className="post-controller">
          <Button 
            as={Link} 
            to="/blog/write" 
            content="Blog Write" 
          />
          <Button content="Favorite" onClick={logOut}/>
        </div>
        <div className="header-title">
          <Link to="/">Hank Link</Link>
        </div>
        <div className="login-controller">
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
        </div>
      </div>
      {children}
    </div>
  );
}

export default withTracker(() => {
  Meteor.subscribe('posts.all');

  return {
    posts: Posts.find().fetch()
  };
})(Header);
