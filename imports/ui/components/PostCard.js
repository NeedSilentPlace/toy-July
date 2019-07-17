import React from 'react';
import { Link } from 'react-router-dom';
import PostCardView from './PostCardView'

import '../stylesheets/postCard.less';

export default function PostCard(props) {
  const { posts, isLoggedIn, isReady } = props;
  console.log('지금은 여기',props)

  return (
    <div className="postcard-container">
      {posts.map(post => (
        <Link key={post._id} to={isLoggedIn ? `/blog/${post._id}` : '/login'}>
          <PostCardView {...post} />
        </Link>
      ))}
    </div>
  );
}
