import React from 'react';
import Signup from '../containers/Signup';
import Header from '../containers/Header';

export default (props) => (
  <Header>
    <Signup isEdit={true} />
  </Header>
);
