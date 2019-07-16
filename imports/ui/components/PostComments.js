import React from 'react';
import '../stylesheets/postComments.less';

export default function PostComments(props) {
  const { ownername, createdAt, content } = props;
  console.log(createdAt);
  return (
    <div className="comments-box">
      <div className="comments-header">
        <span>{ownername}</span>
        <span>date</span>
      </div>
      <div className="comments-content">{content}</div>
    </div>
  );
}
