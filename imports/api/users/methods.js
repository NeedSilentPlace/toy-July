import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  'users.update'(username, phoneNumber) {
    check(username, String);
    check(phoneNumber, String);

    const profile = { username, phoneNumber };
    
    Meteor.users.update(this.userId, {
      $set: { profile }
    });
  }
});
