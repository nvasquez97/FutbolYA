import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Canchas = new Mongo.Collection('canchas');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('canchas', function canchassPublication() {
    return Canchas.find({});
  });
}
