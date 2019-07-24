import React from 'react';
import Loader from 'react-loader-spinner'

import '../stylesheets/spinner.less';

export default Spinner = ->
  <div className="spinner-container">
    <Loader 
      type="Ball-Triangle"
      color="#2699fb"
      height="80"	
      width="80"
    />
  </div>
