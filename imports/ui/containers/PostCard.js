//import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts/posts';
import PostCard from '../components/PostCard';

export default withTracker(() => {
  const postSubscribe = Meteor.subscribe('posts.all');

  return {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
    isLoggedIn: Meteor.userId(),
    isReady: postSubscribe.ready()
  };
})(PostCard);
