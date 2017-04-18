import { Mongo } from 'meteor/mongo';

export const Reservas = new Mongo.Collection('reservas');

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
