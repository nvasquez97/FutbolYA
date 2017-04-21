'use strict';

import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Localidad from './localidad';
import { LocalidadM } from '../api/localidades.js';

export default class Localidades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localidades: [],
      tipo: '',
      localidadH: '',
      escoge: '',
      selected: false,
      cargando: -1,
    };
  }
  tipo(num) {
    const tip = num === 1 ? 'Busca' : 'Recluta';
    this.setState({
      tipo: tip,
      escoge: 'Cargando localidades...',
      localidadH: 'Localidades',
    });

    if (this.state.selected) {
      document.getElementsByClassName('oculto')[0].style.display = 'none';
      this.setState({
        selected: false,
      });
    }
    this.setState({
      tipo: tip,
      escoge: 'Escoge tu localidad: ',
      localidadH: 'Localidades',
    });
    this.obtenerLocalidades();
  }
  reservasL(num, nombreL) {
    this.props.obtenerReservas(this.state.tipo, num);
    if (!this.state.selected) {
      document.getElementsByClassName('oculto')[0].style.display = 'block';
      this.setState({
        selected: true,
      });
    }
  }
  obtenerLocalidades() {
    const locals = LocalidadM.find({});
    this.setState({
      localidades: locals.fetch(),
    });
  }
  render() {
    Meteor.subscribe('localidades');
    return (
      <div className="container">
        <h2 className="primero">¿Qué deseas hacer?</h2>
        <div className="btn-group" data-toggle="buttons-radio">
          <button className="btn btn-default active" onClick={() => { this.tipo(1); }} href="#l1">Buscar Equipo</button>
          <button className="btn btn-danger active" onClick={() => { this.tipo(2); }} href="#l1">Reclutar Equipo</button>
        </div>
        <br />
        <br />
        <h2 className="loc" id="l1">{this.state.localidadH}</h2>
        <p className="escoge">{this.state.escoge}</p>
        <ul>
          <div className="h">
            {this.state.localidades.map(localidad => {
              return (
                <li key={localidad._id}>
                  <Localidad localidad={localidad} reservasL={this.reservasL.bind(this)} />
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    );
  }

  }
