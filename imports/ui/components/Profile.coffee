import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import '../stylesheets/profile.less'

export default Profile = ({ currentUser, selectedUser }) ->
  email = ''
  username = ''
  phoneNumber = ''
  
  validateUser = ->
    if !currentUser
      <div>
        <Link to="/login">Login Please</Link>
      </div>
    else
      <>
        <div>
          <Icon name="phone" /> {phoneNumber}
        </div>
        <div>
        <Icon name="mail" /> {email}
        </div>
      </>

  if currentUser
    email = currentUser.emails[0].address
    username = currentUser.profile.username
    phoneNumber = currentUser.profile.phoneNumber || 'none'

  if selectedUser
    email = selectedUser.emails[0].address
    username = selectedUser.profile.username
    phoneNumber = selectedUser.profile.phoneNumber || 'none'

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
