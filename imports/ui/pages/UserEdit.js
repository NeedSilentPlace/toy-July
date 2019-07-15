import React from 'react';
import Signup from '../components/Signup';
import Header from '../containers/Header';

export default (props) => (
  <Header>
    <Signup isEdit={true} />
  </Header>
);
