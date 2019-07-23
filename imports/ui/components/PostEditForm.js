import { Meteor } from 'meteor/meteor';
import React, { useState, useEffect, useRef } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, Button, TextArea, Container } from 'semantic-ui-react';
import ImageCropper from './ImageCropper';

import '../stylesheets/PostEdit.less';

export default function PostEditForm(props) {
  const { _id, post } = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [src, setSrc] = useState(null);
  const [blogId, setBlogId] = useState('');
  const inputEl = useRef(null);

  useEffect(() => {
    if(post) {
      const { title, description, content } = post;

      setTitle(title);
      setDescription(description);
      setContent(content);
    } else {
      setTitle('');
      setDescription('');
      setContent('');
    }
  }, [post]);

  function savePost() {
    Meteor.call("posts.insert", 
      title, 
      description, 
      content, 
      (err, res) => {
        if(err) {
          return console.log(err);
        }
        setBlogId(res);
    });
  }

  function editPost() {
    Meteor.call("posts.edit",
      _id, 
      title, 
      description, 
      content, 
      (err, res) => {
        if(err) {
          return console.log(err);
        }
        
        setBlogId(_id);
    });
  }

  function onFileSelected(ev) {
    const selectedFile = ev.target.files[0];
    const reader = new FileReader();

    reader.onload = ev => setSrc(ev.target.result);
    reader.readAsDataURL(selectedFile);
  }

  if(blogId) {
    return <Redirect to={`/blog/${blogId}`} />
  }

  return (
    <Container className="post-edit-container">
      <Form>
        <Form.Input
          label="Title"
          placeholder="Type something..."
          value={title}
          onChange={ev => setTitle(ev.target.value)} 
        />
        <Form.Input 
          label="Description"
          placeholder="Type something..."
          value={description}
          onChange={ev => setDescription(ev.target.value)}
        />
        <div className="field">
          {src ? <ImageCropper src={src} /> : null}
          <input type='file' ref={inputEl} onChange={onFileSelected} className="file-input"/>
          <Button content="UPLOAD" onClick={() => inputEl.current.click()}/>
        </div>
        <Form.Field 
          className="edit-textarea"
          label="Description"
          control={TextArea}
          placeholder="Type something..."
          value={content}
          onChange={ev => setContent(ev.target.value)}
        />
        <div className="post-control">
          <Button as={Link} to="/" content="Cancel" />
          <Button content="Save" onClick={_id ? editPost : savePost} />
        </div>
      </Form>
    </Container>
  );
}
