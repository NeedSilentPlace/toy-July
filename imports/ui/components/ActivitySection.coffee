import React from 'react'
import { Grid } from 'semantic-ui-react'

import Spinner from './Spinner.coffee'
import UserSearch from './UserSearch.coffee'
import Chat from '../containers/Chat.coffee'
import SmartLogo from './SmartLogo.coffee';

export default ActivitySection = ({ user, users, isReady }) ->
  chatVisualizer = ->
    if !isReady
      return <Spinner />
    
    if(isReady and user)
      return <Chat />

    <SmartLogo />

  <div style={{padding: "1rem"}}>
    <Grid columns={2} stackable>
      <Grid.Column>
        <UserSearch 
          users={if users then users else []} 
          currentUser={user}
          isReady={isReady}
        />
      </Grid.Column>
      <Grid.Column>
        {chatVisualizer()}
      </Grid.Column>
    </Grid>
  </div>
