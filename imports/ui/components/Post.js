import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Grid, Container, Header, Button, Icon } from 'semantic-ui-react';

import Spinner from './Spinner';
import CommentForm from './CommentForm';
import PostComments from './PostComments';

import '../stylesheets/post.less';

export default function Post({ posts, isReady, currentUser }) {
  const { _id, owner, title, description, content, favorites, comments } = posts ? posts : {};

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

  if(!isReady) {
    return <Spinner />
  }

  if(isReady && !currentUser) {
    return <Redirect to="/login" />
  }

  if(isReady && !posts) {
    return null; //404
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
            <div className="comment-area">
              <CommentForm postId={_id} />
            </div>
            {comments.map(comment => <PostComments key={comment.createdAt} {...comment} />)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
