import React from 'react';
import { Icon } from 'semantic-ui-react';

import '../stylesheets/postCardView.less'

export default postCardView = (props) ->
  { title, description, favorites, comments } = props

  <div className="cardview-box">
    <div>{title}</div>
    <div>{description}</div>
    <div>
      <span>
        <Icon name="heart" />
        {favorites.length}
      </span>
      <span>
        <Icon name="commenting"/>
        {comments.length}
      </span>
    </div>
  </div>
