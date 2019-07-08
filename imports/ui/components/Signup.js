import React, { Fragment, useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import './signup.less';

// console.log(Accounts.createUser)
// console.log(Accounts.changePassword)

export default function Signup(props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  function handleSubmit() {
    if(password !== confirmPassword) {
      return console.log('Incorrect information')
    }
  }

  return (
    <Fragment>
      <h1 className="signup-header">Sign Up</h1>
      <Form className="signup-form">
        <Form.Field
        control={Input} 
        label="*Email" 
        type="text"
        placeholder="Required field"
        value={email} onChange={e => setEmail(e.target.value)} 
        />
        <Form.Field 
          control={Input} 
          label="*Name" 
          type="text"
          placeholder="Required field"
          value={name} onChange={e => setName(e.target.value)}
        />
        <Form.Field 
          control={Input} 
          label="*Password" 
          type="password"
          placeholder="Required field"
          value={password} onChange={e => setPassword(e.target.value)}
        />
        <Form.Field 
          control={Input} 
          label="*Password Confirm"
          type="password"
          placeholder="Required field" 
          value={confirmPassword} onChange={e => setConfirmpassword(e.target.value)}
        />
        <Form.Field 
          control={Input} 
          label="Phone Number" 
          type="text"
          value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} 
        />
        <div className="signup-register">
          <Form.Button onClick={handleSubmit}>Cancel</Form.Button>
          <Form.Button onClick={handleSubmit}>OK</Form.Button>
        </div>
      </Form>
    </Fragment>
  );
}
