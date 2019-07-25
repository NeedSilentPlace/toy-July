import React from 'react';
import Header from '../containers/Header';
import PostEditForm from '../containers/PostEditForm';

export default (props) => (
  <Header>
    <PostEditForm {...props} />
  </Header>
);
