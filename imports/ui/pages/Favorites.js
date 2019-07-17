import React from 'react';
import Header from '../containers/Header';
import PostCard from '../containers/PostCard';

export default function Favorites() {
  return (
    <Header>
      <PostCard isFavorite={true} />
    </Header>
  );
}
