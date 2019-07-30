import React from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'

import ActivitySection from '../components/ActivitySection.coffee'

export default withTracker(-> 
  userSubscribe = Meteor.subscribe('users')

  {
    isReady: userSubscribe.ready(),
    user: Meteor.user(),
    users: Meteor.users.find().fetch(),
  }
) ActivitySection
