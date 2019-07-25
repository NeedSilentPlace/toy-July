import React from 'react'
import { Link } from 'react-router-dom'
import PostCardView from './PostCardView.coffee'

import '../stylesheets/postCard.less'

export default PostCard = (props) ->
  { posts, isLoggedIn, isReady } = props;

  <div className="postcard-container">
    {posts.map (post) => (
      <Link key={post._id} to={if isLoggedIn then "/blog/#{post._id}" else "/login"}>
        <PostCardView {...post} />
      </Link>
    )}
  </div>
