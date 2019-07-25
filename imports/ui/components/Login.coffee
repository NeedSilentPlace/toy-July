import { Meteor } from 'meteor/meteor'
import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import SignupForm from './SignupForm'
import { Button } from 'semantic-ui-react'

import '../stylesheets/login.less'

export default Login = ->
  [email, setEmail] = useState ''
  [password, setPassword] = useState ''
  [isSuccess, setIsSuccess] = useState false

  useEffect (->
    if Meteor.user()
      setIsSuccess true
  ), []

  login = (ev) ->
    ev.preventDefault()

    Meteor.loginWithPassword email, password, (err) ->
      if err then alert(err.reason) else setIsSuccess true

  if isSuccess
    <Redirect exact to='/' />
  else
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
