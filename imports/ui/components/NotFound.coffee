import React from 'react'
import { Link } from 'react-router-dom';
import SmartLogo from './SmartLogo.coffee';

import '../stylesheets/notFound.less'

export default NotFound = ->
  <div className="not-found">
    <SmartLogo />
    <div>
      Sorry, this is incorrect URL. <Link to="/">Click here</Link>
    </div>
  </div>
