import React from 'react'
import { moment } from 'meteor/momentjs:moment'

import '../stylesheets/postComments.less'

export default PostComments = (props) ->
  { ownername, createdAt, content } = props;

  <div className="comments-box">
    <div className="comments-header">
      <span>{ownername}</span>
      <span>{moment(createdAt).fromNow()}</span>
    </div>
    <div className="comments-content">{content}</div>
  </div>
