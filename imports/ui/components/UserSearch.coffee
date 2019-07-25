import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'

import Spinner from './Spinner.coffee'
import UserList from './UserList.coffee'
import Profile from './Profile.coffee'

import '../stylesheets/userSearch.less'

export default UserSearch = (props) ->
  { users, currentUser, isReady } = props
  [selectedUser, setSelectedUser] = useState null
  [searchedUser, setSearchedUser] = useState ''

  usersOnActive = []
  usersOnInactive = []

  if isReady
    users.forEach (user) ->
      if user.status.online then usersOnActive.push user else usersOnInactive.push user

    usersOnInactive.sort (a, b) => b.status.lastLogin.date - a.status.lastLogin.date
    
  

  searchListVisualizer = ->
    if !isReady
      return <Spinner />

    <div className="search-area">
      <form>
        <input
          type="text" 
          value={searchedUser} 
          onChange={(ev) -> setSearchedUser(ev.target.value)} 
        />
      </form>
      {[...usersOnActive, ...usersOnInactive].map (user) => (
        <UserList 
          key={user._id}
          selectUser={setSelectedUser}
          searchedUser={searchedUser}
          {...user} 
        />)
      }
    </div>

  <Grid columns={2} stackable>
    <Grid.Column width={9}>
      {searchListVisualizer()}
    </Grid.Column>
    <Grid.Column width={7}>
      {if isReady then <Profile currentUser={currentUser} selectedUser={selectedUser} /> else <Spinner />}
    </Grid.Column>
  </Grid>
   