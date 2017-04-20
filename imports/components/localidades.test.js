/* eslint-env mocha */
import { Factory } from 'meteor/dburles:factory';
import { chai } from 'meteor/practicalmeteor:chai';
import React from 'react';
import Localidad from './localidad.js'
import { LocalidadM } from '../api/localidades.js'
import { shallow } from 'enzyme';

describe('Localidades', () => {
  it('Obtiene localidades', () => {
    chai.assert(true);
  });
});
<<<<<<< HEAD


if(Meteor.isClient)
{
	Factory.define("local", LocalidadM, {});
	describe('Localidades', () => {
  		it('Renderiza localidades', () => {
  			const localidad = Factory.build('local',{"_id": 1, "key": 1, "ubicacion": "San Cristobal"});
  			const result = shallow(<Localidad localidad={localidad} /> );
    	chai.assert(true);
  		});
	});

}
=======
>>>>>>> af71216a62af2d74a7377071aff1799d9e0c988c
