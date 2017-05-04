/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { Partidos } from './partidos.js';

if (Meteor.isServer) {
  describe('Add Partidos', function () {
    beforeEach(function () {
      Partidos.remove({});
      Partidos.insert({ _id: '1', key: '1', marcador1: '0', marcador2: '0', id_reserva: '1' });
      Partidos.insert({ _id: '2', key: '2', marcador1: '0', marcador2: '0', id_reserva: '2' });
    });
    it('Should find localidades', function () {
      const result = Partidos.find({});
      chai.assert.equal(result.count(), 2);
    });
  });
  describe('Remove Partidos', function () {
    beforeEach(function () {
      Partidos.remove({});
      Partidos.insert({ _id: '3', key: '1', marcador1: '0', marcador2: '0', id_reserva: '1' });
      Partidos.insert({ _id: '4', key: '2', marcador1: '0', marcador2: '0', id_reserva: '2' });
    });
    it('Should remove localidades', function () {
      const result = Partidos.find({});
      const resul1 = chai.assert.equal(result.count(), 2);
      Partidos.remove({});
      const resul2 = chai.assert.equal(result.count(), 0);
      chai.assert.equal(resul1, resul2);
    });
  });
}
