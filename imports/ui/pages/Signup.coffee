import React from 'react'
import Signup from '../containers/Signup.coffee'
import Header from '../containers/Header.coffee'

export default ->
  <Header>
    <Signup isEdit={false} />
  </Header>
