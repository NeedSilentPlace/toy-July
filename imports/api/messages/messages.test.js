import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

import { assert } from 'chai';

import './methods';     // should import methods files for calling methods !
import { Messages } from './messages';


if(Meteor.isServer) {
  describe('Messages', function() {
    describe('methods', function() {
      const userId = Random.id();

      beforeEach(function() {
        Messages.remove({});
      })

      it('can insert own message', function() {
        const insertMessage = Meteor.server.method_handlers['messages.insert'];
        const invocation = { userId };

        insertMessage.call(invocation, 'some text');

        assert.equal(Messages.find().count(), 1);
      });

      it('can not insert messages if user is not logged in', () => {
        const insertMessage = Meteor.server.method_handlers['messages.insert'];
        const invocation = { userId: undefined };

        assert.throws(() => insertMessage.call(invocation, 'some messages'), Meteor.Error, 'not-authorized');
        assert.equal(Messages.find().count(), 0);
      });
    })
  })
}
