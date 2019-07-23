import { Meteor } from 'meteor/meteor';
import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import SignupForm from './SignupForm';
import { Button } from 'semantic-ui-react';

import '../stylesheets/login.less';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if(Meteor.user()) {
      setIsSuccess(true);
    }
  }, []);

  function login(ev) {
    ev.preventDefault();
    
    Meteor.loginWithPassword(
      email, 
      password,
      err => err ? console.log(err) : setIsSuccess(true)
    );
  }

  if(isSuccess) {
    return <Redirect exact to='/' />
  }

  return (
    <div className="login-container" style={{height: "calc(100vh - 100px)"}}>
      <form className="login-form">
        <SignupForm 
          title="Email"
          type="text"
          placeholder="Required Field"
          icon="user"
          value={email}
          action={setEmail}
        />
        <SignupForm 
          title="Password"
          type="password"
          placeholder="Required Field"
          icon="lock"
          value={password}
          action={setPassword}
        />
        <div className="login-control">
          <Button as={Link} to="/" content="Cancel" />
          <Button content="Log In" onClick={login} />
        </div>
      </form>
    </div>
  );
}
