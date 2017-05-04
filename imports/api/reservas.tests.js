/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { Reservas } from './reservas.js';

if (Meteor.isServer) {
  describe('Add Reservas', function () {
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
  describe('Remove Reservas', function () {
    beforeEach(function () {
      Reservas.remove({});
      Reservas.insert({ _id: '3', key: '1', precio: '3000', cupos: '7', id_usuario: '1', id_cancha: '1' });
      Reservas.insert({ _id: '4', key: '2', precio: '4909', cupos: '3', id_usuario: '2', id_cancha: '2' });
    });
    it('Should remove reservas', function () {
      const result = Reservas.find({});
      const resul1 = chai.assert.equal(result.count(), 2);
      Reservas.remove({});
      const resul2 = chai.assert.equal(result.count(), 0);
      chai.assert.equal(resul1, resul2);
    });
  });
}
