import React from 'react';
import { moment } from 'meteor/momentjs:moment'
import { Icon } from 'semantic-ui-react';

import '../stylesheets/message.less';

export default function Message(props) {
  const { currentUser, owner, content, createdAt } = props;
  const isMyMessage = currentUser === owner;

  function validateUserUI() {
    if(isMyMessage) {
      return (
        <>
          <div className="time">{getTime(createdAt)}</div>
          <div>{content}</div>
          <div className="user">
            <Icon name="user" size="big" />
          </div>
        </>
      );
    }

    return (
      <>
        <div className="user">
          <Icon name="user" size="big" />
        </div>
        <div>{content}</div>
        <div className="time">{getTime(createdAt)}</div>
      </>
    );
  }

  return (
    <div className={isMyMessage ? "message me" : "message another"}>
      {validateUserUI()}
    </div>
  );
}

function getTime(time) {
  const date = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth =today.getMonth();
  const todayYear = today.getFullYear();

  const isToday = date === todayDate && month === todayMonth && year === todayYear;

  if(isToday) {
    return `${time.getHours()} : ${time.getMinutes()}`
  }

  return `${year}.${month + 1}.${date}`;
}