import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Messages } from '../../api/messages/messages';
import Chat from '../components/Chat';

export default withTracker(() => {
  const messageSubscribe = Meteor.subscribe('messages.all');

  return {
    currentUserId: Meteor.userId(),
    messages: Messages.find().fetch(),
  };
})(Chat);
