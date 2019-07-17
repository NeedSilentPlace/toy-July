//import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts/posts';
import PostCard from '../components/PostCard';

export default withTracker(({ isFavorite }) => {
  const postSubscribe = Meteor.subscribe('posts.all');

  if(isFavorite) {
    return {
      posts: Posts.find({}, { sort: { createdAt: -1 } })
        .fetch().filter(post => post.favorites.includes(Meteor.userId())),
      isLoggedIn: Meteor.userId(),
      isReady: postSubscribe.ready()
    };
  }

  return {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
    isLoggedIn: Meteor.userId(),
    isReady: postSubscribe.ready()
  };
})(PostCard);
