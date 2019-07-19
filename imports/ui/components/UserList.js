import React from 'react';
import { Icon } from 'semantic-ui-react';

import '../stylesheets/userList.less';

export default function UserList({ profile, status, emails, selectUser }) {
  const { username } = profile;
  const { online } = status;

  function changeProfile() {
    selectUser({
      profile,
      emails
    });
  }

  return (
    <div className="user-list" onClick={changeProfile}>
      <div>
        <Icon name="user" size="large" />
      </div>
      <div>{username}</div>
      <div>{online ? "live" : "Nooooooop!"}</div>
    </div>
  );
}
