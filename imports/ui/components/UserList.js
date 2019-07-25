import React from 'react';
import { Icon } from 'semantic-ui-react';
import { moment } from 'meteor/momentjs:moment';

import '../stylesheets/userList.less';

export default function UserList({ profile, status, emails, selectUser, searchedUser }) {
  const { username } = profile;
  const { online, lastLogin } = status;

  function changeProfile() {
    selectUser({
      profile,
      emails
    });
  }

  if(searchedUser && !username.includes(searchedUser)) {
    return null;
  }

  return (
    <div className="user-list" onClick={changeProfile}>
      <div>
        <Icon name="user" size="large" />
      </div>
      <div>{username}</div>
      <div>{online ? "live" : moment(lastLogin.date).fromNow()}</div>
    </div>
  );
}
