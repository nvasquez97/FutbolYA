import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Reservas = new Mongo.Collection('reservas');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('reservas', function reservasPublication() {
    return Reservas.find({});
  });
}

Meteor.methods({
  'reservas.insert'(idR, key, precio, cupos, keyU, idC) {
    Reservas.insert(
      {
        _id: idR,
        key: key,
        precio: precio,
        cupos: cupos,
        id_usuario: keyU,
        id_cancha: idC,
      },
    );
  },
  'reservas.update'(idR, keyR, precio, cuposN, idU, idC) {
    Reservas.update({ _id: idR },
      {
        key: keyR,
        precio: precio,
        cupos: cuposN,
        id_usuario: idU,
        id_cancha: idC,
      });
  },
});
