import React from 'react';
import { Grid } from 'semantic-ui-react';

import Spinner from './Spinner';
import UserSearch from './UserSearch';
import Chat from '../containers/Chat';

export default function ActivitySection({ isLoggedIn, users, isReady }) {
  
  function chatVisualizer() {
    if(!isReady) {
      return <Spinner />;
    }
    if(isReady && isLoggedIn) {
      return <Chat />;
    }

    return <div>please Login</div>
  }

  return (
    <div style={{padding: "1rem"}}>
      <Grid columns={2} stackable>
        <Grid.Column>
          <UserSearch 
            users={users ? users : []} 
            currentUser={isLoggedIn}
            isReady={isReady}
          />
        </Grid.Column>
        <Grid.Column>
          {chatVisualizer()}
        </Grid.Column>
      </Grid>
    </div>
  );
};
