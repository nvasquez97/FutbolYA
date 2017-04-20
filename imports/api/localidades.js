import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const LocalidadM = new Mongo.Collection('localidades');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('localidades', function localsPublication() {
    return LocalidadM.find({});
  });
}

