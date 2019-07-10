import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './header.less';


export default function Header() {
  return (
    <div className="header-container">
      <div className="post-controller">
        <Button content="Blog Write" />
        <Button content="Favorite" />
      </div>
      <div className="header-title">
        <Link to="/">Hank Link</Link>
      </div>
      <div className="login-controller">
        <Button content="LOG IN" />
        <Button as={Link} to="/signup" content="SIGN UP" />
      </div>
    </div>
  );
}
