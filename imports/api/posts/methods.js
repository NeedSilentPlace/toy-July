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
    
    Posts.insert({
      title,
      description,
      content,
      favorites: [],
      comments: [],
      owner: this.userId,
      createdAt: new Date()
    });
  },
  'posts.edit'(postId ,owner, title, description, content) {
    check(postId, String);
    check(owner, String);
    check(title, String);
    check(description, String);
    check(content, String);

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

    const newComment = {
      owner: this.userId,
      createdAt: new Date(),
      content
    }

    Posts.update(postId, {
      $push: { comments: newComment }
    });
  },
  'posts.toggleFavorites'(favorites) {
    check(favorites, Array);

    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    
    if(favorites.includes(this.userId)) {
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
