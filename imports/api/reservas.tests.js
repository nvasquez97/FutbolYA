/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { Reservas } from './reservas.js';

if (Meteor.isServer) {
  describe('Reservas', function () {
    beforeEach(function () {
      Reservas.remove({});
      Reservas.insert({ _id: '1', key: '1', precio: '3000', cupos: '7', id_usuario: '1', id_cancha: '1' });
      Reservas.insert({ _id: '2', key: '2', precio: '4909', cupos: '3', id_usuario: '2', id_cancha: '2' });
    });
    it('Should find reservas', function () {
      const result = Reservas.find({});
      chai.assert.equal(result.count(), 2);
    });
  });
}
