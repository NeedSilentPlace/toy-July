import { Meteor } from 'meteor/meteor';
import { Messages } from '../messages';

Meteor.publish('messages.all', function() {
  return Messages.find();
});
