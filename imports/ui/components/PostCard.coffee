import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router-dom'
import PostCardView from './PostCardView.coffee'

import '../stylesheets/postCard.less'

export default PostCard = (props) ->
  { posts, userId, isReady } = props;

  <div className="postcard-container">
    {posts.map (post) => (
      <Link key={post._id} to={if userId then "/blog/#{post._id}" else "/login"}>
        <PostCardView {...post} />
      </Link>
    )}
  </div>
