import React from 'react'
import { moment } from 'meteor/momentjs:moment'
import { Icon } from 'semantic-ui-react'

import '../stylesheets/userList.less'

export default UserList = ({ profile, status, emails, selectUser, searchedUser }) ->
  { username } = profile
  { online, lastLogin } = status
  
  changeProfile = ->
    selectUser { profile, emails }

  if searchedUser and !username.includes searchedUser
    null
  else
    <div className="user-list" onClick={changeProfile}>
      <div>
        <Icon name="user" size="large" />
      </div>
      <div>{username}</div>
      <div>{if online then "live" else moment(lastLogin.date).fromNow()}</div>
    </div>
