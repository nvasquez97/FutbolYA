import {Mongo} from "meteor/mongo";
export const Usuarios = new Mongo.Collection('usuarios');

Meteor.methods({
  'usuarios.insert'(idU, keyU, nombre) {
    Usuarios.insert({
      "_id": idU,
      "key": keyU,
      "nombre":nombreUsuario
    });
  }
});