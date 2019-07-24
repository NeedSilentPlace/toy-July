import { Meteor } from 'meteor/meteor';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import sinon from 'sinon';
import { Factory } from 'meteor/dburles:factory';
import { Random } from 'meteor/random';

import { assert, expect } from 'chai';

import './methods';
import { Posts } from './posts';

if Meteor.isServer
  describe 'Posts written coffee', ->
    describe 'methods', -> 
      currentUser = undefined
      postId = undefined
      userId = Random.id()
      anotherUserId = Random.id()

      beforeEach ->
        resetDatabase()
        Factory.define 'user', Meteor.users, profile: 
          username: 'some username',
          phoneNumber: 'digits'
        
        currentUser = Factory.create('user')
        sinon.stub Meteor, 'user'
        Meteor.user.returns currentUser

        Posts.remove {}
        postId = Posts.insert {
          owner: userId,
          title: 'some title',
          description: 'some description',
          content: 'some content',
          favorites: [],
          comments: [],
          createdAt: new Date() 
        }
      
      afterEach ->
        Meteor.user.restore()
        resetDatabase()

      it 'can insert own post', ->
        insertPost = Meteor.server.method_handlers['posts.insert']
        invocation = { userId }
        mock = ['some title', 'some description', 'some content']

        insertPost.apply invocation, mock

        assert.equal Posts.find().count(), 2

      it 'can not insert if not logged in', ->
        insertPost = Meteor.server.method_handlers['posts.insert']
        invocation = userId: undefined 
        mock = ['some title', 'some description', 'some content']

        assert.throws (-> insertPost.apply invocation, mock), Meteor.Error, 'not-authorized'
        assert.equal Posts.find().count(), 1

      it 'can edit own posts', ->
        editPost = Meteor.server.method_handlers['posts.edit']
        invocation = { userId }
        mock = [postId , 'different title', 'different description', 'different content']

        editPost.apply invocation, mock

        { title, description, content } = Posts.findOne postId

        assert.equal Posts.find().count(), 1
        assert.equal title, 'different title'
        assert.equal description, 'different description'
        assert.equal content, 'different content'

      it 'can not edit if user is not post owner', ->
        editPost = Meteor.server.method_handlers['posts.edit']
        invocation = userId: anotherUserId
        mock = [postId , 'different title', 'different description', 'different content']

        assert.throw (-> editPost.apply invocation, mock), Meteor.Error, 'not-authorized'
        assert.equal Posts.find().count(), 1

      it 'can add comments if user logged in', ->
        addComment = Meteor.server.method_handlers['posts.addComments']
        invocation = userId: currentUser._id
        mock = [postId , 'some comments'];

        addComment.apply invocation, mock

        { comments } = Posts.findOne postId

        assert.equal Posts.find().count(), 1
        assert.equal comments.length, 1
        assert.equal comments[0].owner, currentUser._id
        assert.equal comments[0].ownername, currentUser.profile.username
        assert.equal comments[0].content, 'some comments'
        
      it 'can toggle favorites field using one method', ->
        toggleFavorite = Meteor.server.method_handlers['posts.toggleFavorites']
        invocation = userId: anotherUserId

        toggleFavorite.call invocation, postId

        assert.equal Posts.find().count(), 1
        assert.equal Posts.findOne(postId).favorites.length, 1
        assert.equal Posts.findOne(postId).favorites[0], anotherUserId

        toggleFavorite.call invocation, postId

        assert.equal Posts.findOne(postId).favorites.length, 0
        