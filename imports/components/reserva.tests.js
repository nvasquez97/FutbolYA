/* eslint-env mocha */
import { Factory } from 'meteor/dburles:factory';
import { Meteor } from 'meteor/meteor';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import React from 'react';
import Reserva from './reserva.js';
import { Reservas } from '../api/reservas.js';

if (Meteor.isClient) {
  Factory.define('reservita', Reservas, {});
  describe('Reservas', () => {
    it('Renderiza reservas', () => {
      const reserva = Factory.build('reservita', { _id: 1, key: 1, precio: 4500, cupos: 6, id_cancha: 4, id_usuario: 3 });
      const result = shallow(<Reserva reserva={reserva} />);
      chai.assert.equal(result.instance().props.reserva._id, 1);
      chai.assert.equal(result.instance().props.reserva.key, 1);
      chai.assert.equal(result.instance().props.reserva.precio, 4500);
      chai.assert.equal(result.instance().props.reserva.cupos, 6);
      chai.assert.equal(result.instance().props.reserva.id_usuario, 3);
      console.log(result);
    });
  });
}
