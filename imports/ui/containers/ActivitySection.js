import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import ActivitySection from '../components/ActivitySection';

export default withTracker(() => {
  const userSubscribe = Meteor.subscribe('users');

  return {
    isReady: userSubscribe.ready(),
    user: Meteor.user(),
    users: Meteor.users.find().fetch(),
  };
})(ActivitySection);
