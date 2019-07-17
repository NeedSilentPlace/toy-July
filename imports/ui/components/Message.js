import React from 'react';
import { moment } from 'meteor/momentjs:moment'
import { Icon } from 'semantic-ui-react';

import '../stylesheets/message.less';

export default function Message(props) {
  const { currentUser, owner, content, createdAt } = props;
  const isMyMessage = currentUser === owner;

  return (
    <div className={isMyMessage ? "message me" : "message another"}>
      {isMyMessage ? <span>{moment(createdAt).fromNow()}</span> : <Icon name="user"/>}
      <span>{content}</span>
      {isMyMessage ? <Icon name="user" /> : <span>{moment(createdAt).fromNow()}</span>}
    </div>
  );
}
