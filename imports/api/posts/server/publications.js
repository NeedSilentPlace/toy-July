import { Meteor } from 'meteor/meteor';
import { Posts } from '../posts';

Meteor.publish('posts.all', function() {
  return Posts.find();
});
