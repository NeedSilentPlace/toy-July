import { Meteor } from 'meteor/meteor'
import { Random } from 'meteor/random'

import { assert } from 'chai'

#      should import methods files for calling methods !
import './methods'
import { Messages } from './messages'

if Meteor.isServer
  describe 'Message written coffee', -> 
    describe 'methods', ->
      userId = Random.id()

      beforeEach ->
        Messages.remove {}

      it 'can insert own message', ->
        insertMessage = Meteor.server.method_handlers['messages.insert']
        invocation = { userId }

        insertMessage.call invocation, 'some text'
        assert.equal Messages.find().count(), 1

      it 'can not insert messages if user is not logged in', ->
        insertMessage = Meteor.server.method_handlers['messages.insert']
        invocation = userId: undefined

        assert.throws (=> insertMessage.call invocation, 'some messages'), Meteor.Error, 'not-authorized'
        assert.equal Messages.find().count(), 0