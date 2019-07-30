import React from 'react';
import { Grid } from 'semantic-ui-react';

import Spinner from './Spinner';
import UserSearch from './UserSearch';
import Chat from '../containers/Chat';
import SmartLogo from './SmartLogo';

export default function ActivitySection({ user, users, isReady }) {
  
  function chatVisualizer() {
    if(!isReady) {
      return <Spinner />;
    }
    if(isReady && user) {
      return <Chat />;
    }

    return <SmartLogo />
  }

  return (
    <div style={{padding: "1rem"}}>
      <Grid columns={2} stackable>
        <Grid.Column>
          <UserSearch 
            users={users ? users : []} 
            currentUser={user}
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
