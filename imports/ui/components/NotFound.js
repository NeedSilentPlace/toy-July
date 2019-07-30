import React from 'react'
import { Link } from 'react-router-dom';
import SmartLogo from './SmartLogo';

import '../stylesheets/notFound.less'

export default function NotFound() {
  return (
    <div className="not-found">
      <SmartLogo />
      <div>
        Sorry, this is incorrect URL. <Link to="/">Click here</Link>
      </div>
    </div>
  );
}
