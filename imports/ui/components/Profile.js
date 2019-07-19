import React from 'react';
import { Icon } from 'semantic-ui-react';

import '../stylesheets/profile.less';

export default function Profile({ current, selected }) {
  let email = '';
  let username = '';
  let phoneNumber = '';

  if(current) {
    email = current.emails[0].address;
    username = current.profile.username;
    phoneNumber = current.profile.phoneNumber || 'none';
  }
  
  if(selected) {
    email = selected.emails[0].address;
    username = selected.profile.username;
    phoneNumber = selected.profile.phoneNumber || 'none'
  }
  
  return (
    <div className="profile-container">
      <div className="profile-public">
        <div>
          <Icon name="user" size="huge"/>
        </div>
        <div>{username}</div>
      </div>
      <div className="profile-private">
        <div>
          <Icon name="phone" /> {phoneNumber}
        </div>
        <div>
        <Icon name="mail" /> {email}
        </div>
      </div>
    </div>
  );
}