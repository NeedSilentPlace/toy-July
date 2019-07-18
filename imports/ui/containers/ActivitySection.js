import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import ActivitySection from '../components/ActivitySection';

export default withTracker(() => {
  return {
    isLoggedIn: Meteor.userId()
  };
})(ActivitySection);
