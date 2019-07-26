import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/smartLogo.less';

export default function SmartLogo() {
  return (
    <div className="logo-container">
      <Link to="/login">
        <img src="./SL.PNG" />
      </Link>
    </div>
  );
}
