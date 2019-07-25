import React from 'react'
import Header from '../containers/Header.coffee'
import Post from '../containers/Post.coffee'

export default (props) ->
  <Header>
    <Post {...props} />
  </Header>
