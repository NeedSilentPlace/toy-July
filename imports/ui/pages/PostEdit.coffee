import React from 'react'
import Header from '../containers/Header.coffee'
import PostEditForm from '../containers/PostEditForm.coffee'

export default (props) ->
  <Header>
    <PostEditForm {...props} />
  </Header>
