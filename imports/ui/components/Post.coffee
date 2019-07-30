import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Grid, Container, Header, Button, Icon } from 'semantic-ui-react'

import Spinner from './Spinner.coffee'
import CommentForm from './CommentForm.coffee'
import PostComments from './PostComments.coffee'
import NotFound from './NotFound.coffee'

import '../stylesheets/post.less'

export default Post = ({ posts, isReady, currentUser }) ->
  { _id, owner, title, description, content, favorites, comments } = if posts then posts else {}

  toggleFavorites = ->
    Meteor.call 'posts.toggleFavorites', _id
  
  editButtonValidator = ->
    if owner != currentUser
      null
    else
      <Container textAlign="right" className="post-controller">
        <Button as={Link} to={"/blog/edit/#{_id}"} content="Edit" />
      </Container>
  
  if !isReady
    return <Spinner />

  if isReady and !currentUser
    return <Redirect to="/login" />
  
  if isReady and !posts
    return <NotFound /> # 404

  <div className="post-container">
    <Grid columns='equal' stackable>
      <Grid.Row columns='equal'>
        <Grid.Column>
          <Header size="huge" className="post-title">
            {title}
            <Icon 
              className="favorite-icon" 
              name={if favorites.includes(currentUser) then "heart" else "heart outline"}
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
          {comments.map((comment) => <PostComments key={comment.createdAt} {...comment} />)}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
