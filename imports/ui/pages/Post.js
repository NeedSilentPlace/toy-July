import React from 'react';
import Header from '../containers/Header';
import Post from '../containers/Post';

export default (props) => (
  <Header>
    <Post {...props} />
  </Header>
);
