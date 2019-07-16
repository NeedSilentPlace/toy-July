import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Posts } from './posts';

Meteor.methods({
  'posts.insert'(title, description, content) {
    check(title, String);
    check(description, String);
    check(content, String);

    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    
    const newPost = Posts.insert({
      title,
      description,
      content,
      favorites: [],
      comments: [],
      owner: this.userId,
      createdAt: new Date()
    });

    return newPost;  // value of _id
  },
  'posts.edit'(postId , title, description, content) {
    check(postId, String);
    check(title, String);
    check(description, String);
    check(content, String);

    const { owner } = Posts.findOne(postId);

    if(!this.userId && this.userId === owner) {
      throw new Meteor.Error('not-authorized');
    }

    Posts.update(postId, {
      $set: { title, description, content }
    });
  },
  'posts.addComments'(postId, content) {
    check(postId, String);
    check(content, String);
    
    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    const user = Meteor.user();

    const newComment = {
      owner: this.userId,
      ownername: user.profile.username,
      createdAt: new Date(),
      content
    }

    Posts.update(postId, {
      $push: { comments: newComment }
    });
  },
  'posts.toggleFavorites'(postId) {
    check(postId, String);
    
    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    const { favorites } = Posts.findOne(postId);
    
    if(!favorites.includes(this.userId)) {
      Posts.update(postId, {
        $push: { favorites: this.userId }
      });
    } else {
      Posts.update(postId, {
        $pull: { favorites: this.userId }
      });
    }
  }
});
