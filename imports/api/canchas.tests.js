/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { Canchas } from './canchas.js';

if (Meteor.isServer) {
  describe('Add Canchas', function () {
    beforeEach(function () {
      Canchas.remove({});
      Canchas.insert({ _id: '1', direccion: 'Av. 865 g7', nombreSitio: 'Casa Mna', tipo: 5, contacto: '38492', nombreU: 'Nvas' });
      Canchas.insert({ _id: '2', direccion: 'Av ifno4', nombreSitio: 'Boyaca', tipo: 7, contacto: '38492', nombreU: 'kdin' });
    });
    it('Should find canchas', function () {
      const result = Canchas.find({});
      chai.assert.equal(result.count(), 2);
    });
  });
  describe('Remove Canchas', function () {
    beforeEach(function () {
      Canchas.remove({});
      Canchas.insert({ _id: '3', direccion: 'Av. 865 g7', nombreSitio: 'Casa Mna', tipo: 5, contacto: '38492', nombreU: 'Nvas' });
      Canchas.insert({ _id: '4', direccion: 'Av ifno4', nombreSitio: 'Boyaca', tipo: 7, contacto: '38492', nombreU: 'kdin' });
    });
    it('Should remove canchas', function () {
      const result = Canchas.find({});
      const resul1 = chai.assert.equal(result.count(), 2);
      Canchas.remove({});
      const resul2 = chai.assert.equal(result.count(), 0);
      chai.assert.equal(resul1, resul2);
    });
  });
}
