import React from 'react';
import { moment } from 'meteor/momentjs:moment';

import '../stylesheets/postComments.less';

export default function PostComments(props) {
  const { ownername, createdAt, content } = props;

  return (
    <div className="comments-box">
      <div className="comments-header">
        <span>{ownername}</span>
        <span>{moment(createdAt).fromNow()}</span>
      </div>
      <div className="comments-content">{content}</div>
    </div>
  );
}
