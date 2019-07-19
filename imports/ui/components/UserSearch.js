import React, { useState, useEffect } from 'react';
import { Grid, Icon } from 'semantic-ui-react';

import UserList from './UserList';
import Profile from './Profile';

import '../stylesheets/userSearch.less';

export default function UserSearch(props) {
  const { users, currentUser, isReady } = props;
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Grid columns={2} stackable>
      <Grid.Column width={9}>
        <div className="search-area">
          <form>
            <input type="text" />
          </form>
          {isReady ? users.map(user => (
            <UserList 
              key={user._id}
              selectUser={setSelectedUser}
              {...user} 
            />)) : "Roading..."}
        </div>
      </Grid.Column>
      <Grid.Column width={7}>
        {isReady ? (
        <Profile 
          current={currentUser} 
          selected={selectedUser}
        />) : "loading..."}
      </Grid.Column>
    </Grid>
  );
}
