import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Header, Button, Icon } from 'semantic-ui-react';

import CommentForm from './CommentForm';
import PostComments from './PostComments';

import '../stylesheets/post.less';
// heart, heart outline

export default function Post({ posts, isReady, currentUser }) {
  const { _id, owner, title, description, content, favorites, comments } = posts? posts : {};

  function toggleFavorites() {
    Meteor.call('posts.toggleFavorites', _id);
  }

  function editButtonValidator() {
    if(owner !== currentUser) {
      return null;
    }

    return (
      <Container textAlign="right" className="post-controller">
        <Button as={Link} to={`/blog/edit/${_id}`} content="Edit" />
      </Container>
    );
  }

  function commentsValidator() {
    const wasWrite = comments.filter(comment => comment.owner === currentUser).length === 1;

    if(wasWrite) {
      return null;
    }

    return (
      <div className="comment-area">
        <CommentForm postId={_id} />
      </div>
    );
  }

  if(!isReady) {
    return <div>loading...</div>
  }
  
  return (
    <div className="post-container">
      <Grid columns='equal'>
        <Grid.Row columns='equal'>
          <Grid.Column>
            <Header size="huge" className="post-title">
              {title}
              <Icon 
                className="favorite-icon" 
                name={favorites.includes(currentUser) ? "heart" : "heart outline"}
                onClick={toggleFavorites} 
              />
            </Header>
            <Header size="medium" className="post-description">
              {description}
            </Header>
            <Container textAlign="justified" className="post-content">
              {content}
            </Container>
            {editButtonValidator()}
          </Grid.Column>
          <Grid.Column>
            {commentsValidator()}
            {comments.length ? comments.map(comment => <PostComments key={comment.owner} {...comment} />) : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
