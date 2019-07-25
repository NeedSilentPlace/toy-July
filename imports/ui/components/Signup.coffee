import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import SignupForm from './SignupForm.coffee'

import '../stylesheets/signup.less'

export default Signup = ({ isEdit, user }) ->
  [email, setEmail] = useState ''
  [username, setUsername] = useState ''
  [oldPassword, setOldPassword] = useState ''
  [password, setPassword] = useState ''
  [confirmPassword, setConfirmPassword] = useState ''
  [phoneNumber, setPhoneNumber] = useState ''
  [errorMessage, setErrorMessage] = useState ''
  [isSuccess, setIsSuccess] = useState false

  useEffect (->
    if user and isEdit
      { emails, profile } = user
      { username, phoneNumber } = profile

      setEmail emails[0].address
      setUsername username
      setPhoneNumber phoneNumber
  ), [user, isEdit]

  handleSubmit = (ev) -> 
    ev.preventDefault()

    if !email.trim() or !username.trim() or !password.trim() or !confirmPassword.trim()
      return alert 'Required field is not satisfied'
    if password != confirmPassword
      return alert 'incorrect password'

    Accounts.createUser {
      email,
      password,
      profile: {
        username,
        phoneNumber
      }
    }, (err) -> if err then alert err.reason else setIsSuccess true

  editPassword = (ev) ->
    ev.preventDefault()

    if !email.trim() or !username.trim() or !oldPassword.trim() or !password.trim() or !confirmPassword.trim()
      return alert 'Required field is not satisfied'
    if password != confirmPassword
      return alert 'incorrect password'
    
    Accounts.changePassword oldPassword, password, (err) ->
      if err then alert err.reason else editProfile()
  
  editProfile = ->
    Meteor.call 'users.update', username, phoneNumber
    setIsSuccess true

  if user and !isEdit
    return <Redirect to="/" />

  if isSuccess
    return <Redirect to="/" />

  <div className="signup-container" style={{height: "calc(100vh - 100px)"}}>
    <form className="signup-form">
      <SignupForm 
        title="*Email" 
        type="email" 
        placeholder="Required Field" 
        icon="mail"
        value={email}
        action={setEmail} 
        readOnly={isEdit}
      />
      <SignupForm 
        title="*Name" 
        type="text" 
        placeholder="Required Field" 
        icon="user"
        value={username}
        action={setUsername} 
      />
      {if isEdit then (
        <SignupForm 
          title="Old Password"
          type="password"
          placeholder="Required Field"
          icon="lock"
          value={oldPassword}
          action={setOldPassword}
        />
      ) else null}
      <SignupForm 
        title={if isEdit then "New Password" else "*Password"} 
        type="password" 
        placeholder="Required Field" 
        icon="lock"
        value={password}
        action={setPassword} 
      />
      <SignupForm 
        title={if isEdit then "New Password Confirm" else "*Password Confirm"} 
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
        <Button as={Link} to="/" content="Cancel" />
        <Button content="OK" onClick={if isEdit then editPassword else handleSubmit}/>
      </div>
    </form>
  </div>  