import { Meteor } from 'meteor/meteor';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import sinon from 'sinon';
import { Factory } from 'meteor/dburles:factory';
import { Random } from 'meteor/random';

import { assert, expect } from 'chai';

import './methods';
import { Posts } from './posts';

if(Meteor.isServer) {
  describe('Posts', function() {
    describe('methods', function() {
      let currentUser;
      const userId = Random.id();
      const anotherUserId = Random.id();
      let postId;

      beforeEach(function() {
        resetDatabase();
        Factory.define('user', Meteor.users, {
          profile: {
            username: 'some username',
            phoneNumber: 'digits'
          }
        });
        currentUser = Factory.create('user');
        sinon.stub(Meteor, 'user');
        Meteor.user.returns(currentUser);

        Posts.remove({});
        postId = Posts.insert({
          owner: userId,
          title: 'some title',
          description: 'some description',
          content: 'some content',
          favorites: [],
          comments: [],
          createdAt: new Date() 
        })
      });

      afterEach(() => {
        Meteor.user.restore();
        resetDatabase();
      })

      it('can insert own post', function() {
        const insertPost = Meteor.server.method_handlers['posts.insert'];
        const invocation = { userId };
        const mock = ['some title', 'some description', 'some content'];

        insertPost.apply(invocation, mock);

        assert.equal(Posts.find().count(), 2);
      });

      it('can not insert if not logged in', () => {
        const insertPost = Meteor.server.method_handlers['posts.insert'];
        const invocation = { userId: undefined };
        const mock = ['some title', 'some description', 'some content'];

        assert.throws(() => insertPost.apply(invocation, mock), Meteor.Error, 'not-authorized');
        assert.equal(Posts.find().count(), 1);
      });

      it('can edit own posts', () => {
        const editPost = Meteor.server.method_handlers['posts.edit'];
        const invocation = { userId };
        const mock = [postId , 'different title', 'different description', 'different content'];

        editPost.apply(invocation, mock);
        
        const { title, description, content } = Posts.findOne(postId);

        assert.equal(Posts.find().count(), 1);
        assert.equal(title, 'different title');
        assert.equal(description, 'different description');
        assert.equal(content, 'different content');
      });

      it('can not edit if user is not post owner', () => {
        const editPost = Meteor.server.method_handlers['posts.edit'];
        const invocation = { userId: anotherUserId };
        const mock = [postId , 'different title', 'different description', 'different content'];

        assert.throws(() => editPost.apply(invocation, mock), Meteor.Error, 'not-authorized');
        assert.equal(Posts.find().count(), 1);
      });

      it('can add comments if user logged in', () => {
        const addComment = Meteor.server.method_handlers['posts.addComments'];
        const invocation = { userId: currentUser._id };
        const mock = [postId , 'some comments'];
        
        addComment.apply(invocation, mock);
        
        const { comments } = Posts.findOne(postId);

        assert.equal(Posts.find().count(), 1);
        assert.equal(comments.length, 1);
        assert.equal(comments[0].owner, currentUser._id);
        assert.equal(comments[0].ownername, currentUser.profile.username);
        assert.equal(comments[0].content, 'some comments');
      });

      it('can toggle favorites fieled using one method', () => {
        const toggleFavorite = Meteor.server.method_handlers['posts.toggleFavorites'];
        const invocation = { userId: anotherUserId };

        toggleFavorite.call(invocation, postId);

        assert.equal(Posts.find().count(), 1);
        assert.equal(Posts.findOne(postId).favorites.length, 1);
        assert.equal(Posts.findOne(postId).favorites[0], anotherUserId);

        toggleFavorite.call(invocation, postId);
        
        assert.equal(Posts.findOne(postId).favorites.length, 0);

      });

    })
  })
}
