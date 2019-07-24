import React from 'react';
import { Grid } from 'semantic-ui-react';

import Spinner from './Spinner.coffee';
import UserSearch from './UserSearch.coffee';
import Chat from '../containers/Chat.coffee';

export default ActivitySection = ({ isLoggedIn, users, isReady }) ->
  chatVisualizer = ->
    if !isReady
      return <Spinner />
    
    if(isReady and isLoggedIn)
      return <Chat />

    <div>Please Login</div>

  <div style={{padding: "1rem"}}>
    <Grid columns={2} stackable>
      <Grid.Column>
        <UserSearch 
          users={if users then users else []} 
          currentUser={isLoggedIn}
          isReady={isReady}
        />
      </Grid.Column>
      <Grid.Column>
        {chatVisualizer()}
      </Grid.Column>
    </Grid>
  </div>
