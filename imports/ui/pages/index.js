import React from 'react';
import Header from '../containers/Header';
import ActivitySection from '../containers/ActivitySection';
import PostCard from '../containers/PostCard';

export default function Home() {
  return (
    <Header>
      <ActivitySection />
      <PostCard />
    </Header>
  );
}
