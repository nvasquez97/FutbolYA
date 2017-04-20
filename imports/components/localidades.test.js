/* eslint-env mocha */
import { Factory } from 'meteor/dburles:factory';
import { chai } from 'meteor/practicalmeteor:chai';
import React from 'react';
import Localidad from './localidad.js'
import { LocalidadM } from '../api/localidades.js'
import { shallow } from 'enzyme';

describe('Localidades', () => {
  it('Este test no hace nada, podrias hacer un assert de Localidad, no se de que exactamente', () => {
    chai.assert(true);
  });
});

if(Meteor.isClient){
	Factory.define("local", LocalidadM, {});
	describe('Localidades', () => {
  		it('Renderiza localidades', () => {
  			const localidad = Factory.build('local',{"_id": 1, "key": 1, "ubicacion": "San Cristobal"});
  			const result = shallow(<Localidad localidad={localidad} /> );
  			chai.assert.equal(result.node.props.children, 'San Cristobal');
  			chai.assert.equal(result.instance().props.localidad.ubicacion, 'San Cristobal');
  			chai.assert.equal(result.instance().props.localidad.key, 1);
  		});
	});
}
	


