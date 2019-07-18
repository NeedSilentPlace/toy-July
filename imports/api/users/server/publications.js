import { Meteor } from 'meteor/meteor';

Meteor.publish('posts.all', function() {
  return Meteor.user.find();
});
