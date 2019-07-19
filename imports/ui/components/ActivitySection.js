import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';

import UserSearch from './UserSearch';
import Chat from '../containers/Chat';

export default function ActivitySection({ isLoggedIn, users, isReady }) {
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
          {isLoggedIn ? <Chat /> : <div style={{ height: "350px" }}>Please Login</div>}
        </Grid.Column>
      </Grid>
    </div>
  );
};
