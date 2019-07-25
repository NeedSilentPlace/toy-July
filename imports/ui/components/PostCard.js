import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PostCardView from './PostCardView';

import '../stylesheets/postCard.less';

export default function PostCard(props) {
  const { posts, isLoggedIn, isReady } = props;

  if(isReady && !isLoggedIn) {
    return <Redirect to="/login" />;
  }

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
