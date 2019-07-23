import React, { useState, useEffect } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';

import Spinner from './Spinner';
import UserList from './UserList';
import Profile from './Profile';

import '../stylesheets/userSearch.less';

export default function UserSearch(props) {
  const { users, currentUser, isReady } = props;
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchedUser, setSearchedUser] = useState('');

  useEffect(() => {
    Meteor.call('users.search', searchedUser, (err, result) => {
      if(err) {
        console.log(err)
      }
      console.log(result);
    })
  }, []);

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
