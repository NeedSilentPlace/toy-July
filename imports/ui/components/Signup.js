import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import SignupForm from './SignupForm';
import './signup.less';

// console.log(Accounts.createUser)
// console.log(Accounts.changePassword)


export default function Signup(props) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(ev) {
    ev.preventDefault();
    
    if(password !== confirmPassword) {
      return console.log('incorrect password');
    }
    
    Accounts.createUser({
      username,
      email,
      password
    }, err => err ? setErrorMessage(err.reason) : setIsSuccess(true))
  }

  if(isSuccess) {
    return <Redirect exact to='/' />
  }

  return (
    <div>
      <form className="signup-form">
        <SignupForm 
          title="*Email" 
          type="text" 
          placeholder="Required Field" 
          icon="mail"
          value={email}
          action={setEmail} 
        />
        <SignupForm 
          title="*Name" 
          type="text" 
          placeholder="Required Field" 
          icon="user"
          value={username}
          action={setUsername} 
        />
        <SignupForm 
          title="*Password" 
          type="password" 
          placeholder="Required Field" 
          icon="lock"
          value={password}
          action={setPassword} 
        />
        <SignupForm 
          title="*Password Confirm" 
          type="password"
          placeholder="Required Field" 
          icon="lock"
          value={confirmPassword}
          action={setConfirmPassword} 
        />
        <SignupForm 
          title="Phone Number" 
          type="text" 
          placeholder="" 
          icon="phone"
          value={phoneNumber}
          action={setPhoneNumber} 
        />
        <div className="signup-register">
          <Button content="Cancel" />
          <Button content="OK" onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  );
}
