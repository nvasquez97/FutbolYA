import {Mongo} from "meteor/mongo";


export const Partidos = new Mongo.Collection('partidos');

Meteor.methods({
  'partidos.insert'(idP, keyP, key) {
 	Partidos.insert(
      {
      "_id": idP,
      "key": keyP,
      "marcador1": 0,
      "marcador2": 0,
      "id_reserva": key
    }
    );
  },
  'partidos.update'(idP, keyP, marcador1, marcador2,idR)
  {

  	Partidos.update({"_id":idP},
            {
                  "key": keyP,
                  "marcador1": marcador1,
                  "marcador2": marcador2,
                  "id_reserva": idR
            });
  }
});