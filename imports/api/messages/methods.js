import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Messages } from './messages';

Meteor.methods({
  'messages.insert'(content) {
    check(content, String);

    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    return Messages.insert({
      owner: this.userId,
      createdAt: new Date(),
      content
    });
  }
});
