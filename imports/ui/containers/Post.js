import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts/posts';

import Post from '../components/Post';

export default withTracker(({ match }) => {
  const { _id } = match.params;
  const postSubscribe = Meteor.subscribe('posts.details', _id);

  return {
    currentUser: Meteor.userId(),
    posts: Posts.findOne(_id),
    isReady: postSubscribe.ready()
  };
})(Post);
