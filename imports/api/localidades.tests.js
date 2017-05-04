/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { LocalidadM } from './localidades.js';

if (Meteor.isServer) {
  describe('Add Localidades', function () {
    beforeEach(function () {
      LocalidadM.remove({});
      LocalidadM.insert({ _id: '1', ubicación: 'Suba' });
      LocalidadM.insert({ _id: '2', ubicación: 'Usaquen' });
    });
    it('Should find localidades', function () {
      const result = LocalidadM.find({});
      chai.assert.equal(result.count(), 2);
    });
  });
  describe('Remove Localidades', function () {
    beforeEach(function () {
      LocalidadM.remove({});
      LocalidadM.insert({ _id: '3', ubicación: 'Suba' });
      LocalidadM.insert({ _id: '4', ubicación: 'Usaquen' });
    });
    it('Should remove localidades', function () {
      const result = LocalidadM.find({});
      const resul1 = chai.assert.equal(result.count(), 2);
      LocalidadM.remove({});
      const resul2 = chai.assert.equal(result.count(), 0);
      chai.assert.equal(resul1, resul2);
    });
  });
}
