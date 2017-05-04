/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { Usuarios } from './usuarios.js';

if (Meteor.isServer) {
  describe('Add Usuario', function () {
    beforeEach(function () {
      Usuarios.remove({});
      Usuarios.insert({ _id: '1', nombre: 'NVasq' });
      Usuarios.insert({ _id: '2', nombre: 'LCast' });
    });
    it('Should find usuarios', function () {
      const result = Usuarios.find({});
      chai.assert.equal(result.count(), 2);
    });
  });
  describe('Remove Usuario', function () {
    beforeEach(function () {
      Usuarios.remove({});
      Usuarios.insert({ _id: '1', nombre: 'NVasq' });
      Usuarios.insert({ _id: '2', nombre: 'LCast' });
    });
    it('Should remove usuarios', function () {
      const result = Usuarios.find({});
      const resul1 = chai.assert.equal(result.count(), 2);
      Usuarios.remove({});
      const resul2 = chai.assert.equal(result.count(), 0);
      chai.assert.equal(resul1, resul2);
    });
  });
}

