import { Meteor } from 'meteor/meteor';
import React, { useState, useRef } from 'react';
import { Form, Button, TextArea, Container } from 'semantic-ui-react';
import ImageCropper from './ImageCropper';

import '../stylesheets/PostEdit.less';

export default function PostEditForm(props) {
  console.log(props);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [src, setSrc] = useState(null);
  const inputEl = useRef(null);

  function savePost() {
    Meteor.call('posts.insert', title, description, content);
  }

  function onFileSelected(ev) {
    const selectedFile = ev.target.files[0];
    const reader = new FileReader();

    reader.onload = ev => setSrc(ev.target.result);
    reader.readAsDataURL(selectedFile);
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
          <Button content="Cancel" />
          <Button content="Save" onClick={savePost} />
        </div>
      </Form>
    </Container>
  );
}
