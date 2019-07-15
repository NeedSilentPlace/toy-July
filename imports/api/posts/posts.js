import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Posts = new Mongo.Collection('posts');

const testSchema = new SimpleSchema({
  owner: { type: String },
  title: { type: String },
  description: { type: String },
  content: { type: String },
  favorites: { type: Array },
  'favorites.$': { type: String },
  comments: { type: Array },
  'comments.$': { type: Object },
  'comments.$.owner' : { type: String },
  'comments.$.content' : { type: String },
  'comments.$.createdAt' : { type: Date },
  createdAt: { type: Date }
});

const commentsSchema = new SimpleSchema({
  owner: { type: String },
  content: { type: String },
  createdAt: { type: String }
});

Posts.attachSchema(testSchema);
