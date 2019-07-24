import React from 'react'
import { Icon } from 'semantic-ui-react'

import '../stylesheets/message.less'

export default Message = (props) ->
  { currentUser, owner, content, createdAt } = props
  isMyMessage = currentUser == owner

  getTime = (time) ->
    date = time.getDate()
    month = time.getMonth()
    year = time.getFullYear()

    today = new Date()
    todayDate = today.getDate()
    todayMonth =today.getMonth()
    todayYear = today.getFullYear()

    isToday = date == todayDate and month == todayMonth and year == todayYear

    if isToday
      "#{time.getHours()} : #{time.getMinutes()}"
    else
      "#{year}.#{month + 1}.#{date}"

  validateUserUI = ->
    if isMyMessage
      <>
        <div className="time">{getTime(createdAt)}</div>
        <div>{content}</div>
        <div className="user">
          <Icon name="user" size="big" />
        </div>
      </>
    else
      <>
        <div className="user">
          <Icon name="user" size="big" />
        </div>
        <div>{content}</div>
        <div className="time">{getTime(createdAt)}</div>
      </>
  
  <div className={if isMyMessage then "message me" else "message another"}>
    {validateUserUI()}
  </div>
