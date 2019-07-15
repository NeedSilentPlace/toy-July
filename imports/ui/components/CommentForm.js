import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Form, Button, Comment } from 'semantic-ui-react';
import '../stylesheets/commentForm.less';

export default function CommentForm(props) {
  const { postId } = props;
  const [comments, setComments] = useState('');

  function addComments(ev) {
    ev.preventDefault();

    Meteor.call('posts.addComments', postId, comments);
  }
console.log(comments)
  return (
    <Form className="comment-create-form">
      <Form.TextArea value={comments} onChange={ev => setComments(ev.target.value)}/>
      <button onClick={addComments}>ADD COMMENT</button>
    </Form>
  );
};
