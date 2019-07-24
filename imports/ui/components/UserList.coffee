import React from 'react';
import { Icon } from 'semantic-ui-react';

import '../stylesheets/userList.less';

export default UserList = ({ profile, status, emails, selectUser, searchedUser }) ->
  { username } = profile
  { online } = status

  changeProfile = ->
    selectUser { profile, emails }

  if searchedUser and !username.includes searchedUser
    null

  <div className="user-list" onClick={changeProfile}>
    <div>
      <Icon name="user" size="large" />
    </div>
    <div>{username}</div>
    <div>{online ? "live" : "Nooooooop!"}</div>
  </div>
    