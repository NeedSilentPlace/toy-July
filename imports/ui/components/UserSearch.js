import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';

import Spinner from './Spinner';
import UserList from './UserList';
import Profile from './Profile';

import '../stylesheets/userSearch.less';

export default function UserSearch(props) {
  const { users, currentUser, isReady } = props;
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchedUser, setSearchedUser] = useState('');

  const usersOnActive = [];
  const usersOnInactive = [];

  if(isReady) {
    users.forEach(user => {
      user.status.online ? usersOnActive.push(user) : usersOnInactive.push(user);
    });
  }

  function searchListVisualizer() {
    if(!isReady) {
      return <Spinner />
    }

    return (
      <div className="search-area">
        <form>
          <input
            type="text" 
            value={searchedUser} 
            onChange={ev => setSearchedUser(ev.target.value)} 
          />
        </form>
        {[...usersOnActive, ...usersOnInactive].map(user => (
          <UserList 
            key={user._id}
            selectUser={setSelectedUser}
            searchedUser={searchedUser}
            {...user} 
          />))
        }
      </div>
    );
  }

  return (
    <Grid columns={2} stackable>
      <Grid.Column width={9}>
        {searchListVisualizer()}
      </Grid.Column>
      <Grid.Column width={7}>
        {isReady ? (
        <Profile 
          currentUser={currentUser} 
          selectedUser={selectedUser}
        />) : <Spinner />}
      </Grid.Column>
    </Grid>
  );
}
