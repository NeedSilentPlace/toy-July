import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import Signup from './Signup';

export default class AccountsUI extends Component {
  componentDidMount() {
    console.log(Accounts.createUser)
    console.log(Accounts.changePassword)
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div>
        <Signup />
      </div>
    );
  }
}
