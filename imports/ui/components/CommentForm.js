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

  return (
    <form className="comment-input">
      <label>Comment</label>
      <textarea value={comments} onChange={ev => setComments(ev.target.value)}></textarea>
      <div className="button-box">
        <button onClick={addComments}>ADD COMMENT</button>
      </div>
    </form>
  );
};
