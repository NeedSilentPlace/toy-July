import { Meteor } from 'meteor/meteor';
import React from 'react';
import { shallow, configure } from 'enzyme';
import { assert } from 'chai';

import Adapter from 'enzyme-adapter-react-16';

configure({ apdapter: new Adapter() });

import SignupForm from './SignupForm';

if(Meteor.isClient) {
  describe('SignupForm', () => {
    it('should render', () => {
      const section = {
        title: 'some title',
        type: 'text',
        placeholder: 'some placeholder',
        icon: 'some icon',
        value: 'some value',
        action: function() {},
        readOnly: false,
      };
  
      const signupForm = shallow(<SignupForm {...section}/>);
      assert(signupForm.hasClass('signup-field'));
    });
  });
}
