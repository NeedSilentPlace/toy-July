import React from 'react';
import { Icon } from 'semantic-ui-react';

import '../stylesheets/profile.less';

export default function Profile({ currentUser, selectedUser }) {
  let email = '';
  let username = '';
  let phoneNumber = '';


  function validateUser() {
    if(!currentUser) {
      return (
        <div>login please</div>
      );
    }
    return (
      <>
        <div>
          <Icon name="phone" /> {phoneNumber}
        </div>
        <div>
        <Icon name="mail" /> {email}
        </div>
      </>
    ); 
  }

  if(currentUser) {
    email = currentUser.emails[0].address;
    username = currentUser.profile.username;
    phoneNumber = currentUser.profile.phoneNumber || 'none';
  }
  
  if(selectedUser) {
    email = selectedUser.emails[0].address;
    username = selectedUser.profile.username;
    phoneNumber = selectedUser.profile.phoneNumber || 'none'
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
        {validateUser()}
      </div>
    </div>
  );
}