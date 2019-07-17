import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Messages = new Mongo.Collection('messages');

const messagesSchema = new SimpleSchema({
  owner: { type: String },
  content: { type: String },
  createdAt: { type: Date }
});

Messages.attachSchema(messagesSchema);
