/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { LocalidadM } from './localidades.js';

if (Meteor.isServer) {
  describe('Localidades', function () {
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
}
