import { Meteor } from 'meteor/meteor'
import React, { useState } from 'react'

import '../stylesheets/commentForm.less'

export default CommentForm = ({ postId }) ->
  [comments, setComments] = useState ''

  addComments = (ev) ->
    ev.preventDefault()

    Meteor.call 'posts.addComments', postId, comments

  <form className="comment-input">
    <label>Comment</label>
    <textarea value={comments} onChange={(ev) => setComments(ev.target.value)}></textarea>
    <div className="button-box">
      <button onClick={addComments}>ADD COMMENT</button>
    </div>
  </form>
