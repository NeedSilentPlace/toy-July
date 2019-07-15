import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Header from '../components/Header';

export default withTracker(() => {
  return {
    user: Meteor.user()
  };
})(Header);
