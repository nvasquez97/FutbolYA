/* eslint-env mocha */
import { Factory } from 'meteor/dburles:factory';
import { Meteor } from 'meteor/meteor';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import React from 'react';
import Cancha from './cancha.js';
import { Canchas } from '../api/canchas.js';


if (Meteor.isClient) {
  Factory.define('canchita', Canchas, {});
  describe('Canchas', () => {
    it('Renderiza canchas', () => {
      const cancha = Factory.build('canchita', { _id: 1, key: 1, tipo: 5, contacto: '7855509', nombreSitio: 'Casa M' });
      const result = shallow(<Cancha cancha={cancha} />);
      chai.assert.equal(result.instance().props.cancha.tipo, 5);
      chai.assert.equal(result.instance().props.cancha.key, 1);
      chai.assert.equal(result.instance().props.cancha.contacto, '7855509');
      chai.assert.equal(result.instance().props.cancha.nombreSitio, 'Casa M');
      console.log(result);
    });
  });
}
