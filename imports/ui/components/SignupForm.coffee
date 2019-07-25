import React from 'react'
import { Icon } from 'semantic-ui-react'

import '../stylesheets/signupForm.less'

export default signupForm = (props) ->
  { title, type, placeholder, icon, value, action, readOnly } = props

  <div className="signup-field">
    <label>{title}</label>
    <Icon name={icon} />
    <input 
      type={type} 
      placeholder={placeholder} 
      value={value}
      onChange={(ev) => action(ev.target.value)}
      readOnly={readOnly}
    />
  </div>
