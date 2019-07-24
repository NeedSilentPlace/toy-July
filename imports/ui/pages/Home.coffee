import React from 'react'
import Header from '../containers/Header.coffee'
import ActivitySection from '../containers/ActivitySection.coffee'
import PostCard from '../containers/PostCard.coffee'

export default Home = ->
  <Header>
    <ActivitySection />
    <PostCard />
  </Header>
