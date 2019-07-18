import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';

import UserSearch from './UserSearch';
import Chat from '../containers/Chat';

export default function ActivitySection({ isLoggedIn }) {
  return (
    <Grid columns={2} stackable>
      <Grid.Column>
        <UserSearch />
      </Grid.Column>
      <Grid.Column>
        {isLoggedIn ? <Chat /> : <div style={{ height: "350px" }}>Please Login</div>}
      </Grid.Column>
    </Grid>
  );
};
