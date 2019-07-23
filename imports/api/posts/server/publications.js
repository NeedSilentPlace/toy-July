import { Meteor } from 'meteor/meteor';
import { Posts } from '../posts';

Meteor.publish('posts.all', function() {
  return Posts.find();
});

Meteor.publish('posts.details', function(_id) {
  return Posts.find(_id);
});

Meteor.publish('posts.favorites', function() {
  return Posts.find({ favorites: this.userId});
});
