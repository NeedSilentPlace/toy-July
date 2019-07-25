import { Meteor } from 'meteor/meteor'
import React, { useState, useEffect, useRef } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Form, Button, TextArea, Container } from 'semantic-ui-react'
import ImageCropper from './ImageCropper.coffee'

import '../stylesheets/PostEdit.less'

export default PostEditForm = ({ _id, post }) ->
  [title, setTitle] = useState ''
  [description, setDescription] = useState ''
  [content, setContent] = useState ''
  [src, setSrc] = useState null
  [blogId, setBlogId] = useState ''
  inputEl = useRef null

  useEffect (->
    if post
      { title, description, content } = post

      setTitle title
      setDescription description
      setContent content
      
      return
    else
      setTitle ''
      setDescription ''
      setContent ''
      
      return 
  ), [post]

  savePost = ->
    if !title.trim() or !description.trim()
      alert 'Please type title and description'
    else
      Meteor.call 'posts.insert', title, description, content, (err, res) ->
        if err
          alert err.reason
        else
          setBlogId res
  
  editPost = ->
    if !title.trim() or !description.trim()
      alert 'Please type title and description'
    else
      Meteor.call 'posts.edit', _id, title, description, content, (err, result) ->
        if err
          alert err.reason
        else
          setBlogId _id

  onFileSelected = (ev) ->
    selectedFile = ev.target.files[0]
    reader = new FileReader()

    reader.onload = (ev) => setSrc ev.target.result
    reader.readAsDataURL selectedFile

  if blogId
    <Redirect to="/blog/#{blogId}" />
  else 
    <Container className="post-edit-container">
      <Form>
        <Form.Input
          label="Title"
          placeholder="Type something..."
          value={title}
          onChange={(ev) => setTitle ev.target.value} 
        />
        <Form.Input 
          label="Description"
          placeholder="Type something..."
          value={description}
          onChange={(ev) => setDescription ev.target.value}
        />
        <div className="field">
          {if src then <ImageCropper src={src} /> else null}
          <input type='file' ref={inputEl} onChange={onFileSelected} className="file-input"/>
          <Button content="UPLOAD" onClick={() => inputEl.current.click()}/>
        </div>
        <Form.Field 
          className="edit-textarea"
          label="Description"
          control={TextArea}
          placeholder="Type something..."
          value={content}
          onChange={(ev) => setContent ev.target.value}
        />
        <div className="post-control">
          <Button as={Link} to="/" content="Cancel" />
          <Button content="Save" onClick={if _id then editPost else savePost} />
        </div>
      </Form>
    </Container>
