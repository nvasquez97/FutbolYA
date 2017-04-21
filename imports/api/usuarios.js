import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Usuarios = new Mongo.Collection('usuarios');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('usuarios', function usuariosPublication() {
    return Usuarios.find({});
  });
}

Meteor.methods({
  'usuarios.insert'(idU, keyU, nombreUsuario) {
    Usuarios.insert({
      _id: idU,
      key: keyU,
      nombre: nombreUsuario,
    });
  },
});
