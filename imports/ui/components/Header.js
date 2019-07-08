import React from 'react';
import { Button } from 'semantic-ui-react';
import './header.less';

export default function Header() {
  return (
    <div className="header-container">
      <div className="post-controller">
        <Button content="Blog Write" />
        <Button content="Favorite" />
      </div>
      <div className="header-title">
        <span>Hank Link</span>
      </div>
      <div className="login-controller">
        <Button content="LOG IN" />
        <Button content="SIGN UP" />
      </div>
    </div>
  );
}
