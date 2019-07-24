import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Header from '../components/Header.coffee';

export default withTracker(->
  user: Meteor.user()
) Header
