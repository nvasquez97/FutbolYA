/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { Usuarios } from './usuarios.js';

if (Meteor.isServer) {
  describe('Usuario', function () {
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
}

