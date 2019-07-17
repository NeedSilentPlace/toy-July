//import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Signup from '../components/Signup';

export default withTracker(({ isEdit }) => {
  return {
    user: Meteor.user(),
    isEdit
  };
})(Signup);
