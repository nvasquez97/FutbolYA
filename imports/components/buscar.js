
  'use strict';
  import React, { Component } from 'react';
  import { Meteor } from 'meteor/meteor';
  import Reserva from './reserva';
  import Cancha from './cancha';
  import { Reservas } from '../api/reservas.js';
  import { Canchas } from '../api/canchas.js';

  export default class Buscar extends Component {


    constructor(props) {
      super(props);
      this.state = {
        reservas: [],
        canchas: [],
        id: '',
        tipo: '',
        descripcion: '',
        estado: '',
        localidad: '',
      };
    }
    infoReserva(num, idC) {
      this.setState({
        reservas: [],
        canchas: [],
        id: '',
        tipo: '',
        descripcion: '',
        estado: '',
      });
      this.props.infoReserva(num, idC);
      document.getElementsByClassName('oculto')[0].style.display = 'none';
    }

    obtenerNombreCancha(idcancha) {
      const lac = Canchas.find({ key: idcancha });
      const nombreC = lac.fetch();
      return nombreC[0].nombreSitio;
    }

    obtenerReservas(num) {
      const idloc = this.props.localidad;
      if (this.props.reserva === 'Busca') {
        const lcanchas = Canchas.find({ id_localidad: idloc, tipo: num }).fetch();
        let reservar = [];
        lcanchas.map(cancha => {
          reservar = reservar.concat(Reservas.find({ id_cancha: cancha.key }).fetch()); 
        });
        if (reservar.length > 0) {
          this.setState({
            reservas: reservar,
            canchas: [],
            tipo: 'Fútbol ' + num,
            descripcion: 'Mira reservas para ',
            localidad: '',
          });
        }
        else {
          this.setState({
            reservas: [],
            canchas: [],
            tipo: 'Fútbol ' + num,
            localidad: ' en tu localidad',
            descripcion: 'No hay reservas para ',
          });
        }
       }
      else {
        const recluta = Canchas.find({ id_localidad: idloc, tipo: num });
        if (recluta.fetch().length > 0) {
          this.setState({
            canchas: recluta.fetch(),
            reservas: [],
            tipo: 'Fútbol ' + num,
            localidad: '',
            descripcion: 'Intenta reclutar en: ',
          });
        }
        else {
          this.setState({
            canchas: [],
            reservas: [],
            tipo: 'Fútbol ' + num,
            localidad: ' en tu localidad',
            descripcion: 'No hay canchas de ',
          });
        }
      }
      document.getElementById("fin").scrollIntoView();
    }
    render() {
      Meteor.subscribe('reservas');
      Meteor.subscribe('canchas');
      console.log(this.props.reserva);
      return (
        <div className="container oculto" id="b1">
          <h1 className="rojo">
            <strong>{this.props.reserva}</strong> en tu cancha favorita:
          </h1>
          <div className="row">
            <button className="btn btn-default" onClick={() => this.obtenerReservas(5)}>Fútbol 5</button>
            <button className="btn btn-danger active" onClick={() => this.obtenerReservas(7)}>Fútbol 7</button>
            <button className="btn btn-default" onClick={() => this.obtenerReservas(8)}>Fútbol 8</button>
            <button className="btn btn-danger active" onClick={() => this.obtenerReservas(11)}>Fútbol 11</button>
          </div>
          <h3 className="amarillo">{this.state.descripcion}<strong><span>{this.state.tipo}</span>{this.state.localidad}</strong></h3>
          {this.state.reservas.map(reserva => {
            if (reserva.cupos > 0) {
              return <Reserva key={reserva.key} reserva={reserva} nombreC={this.obtenerNombreCancha(reserva.id_cancha)} infoReserva={this.infoReserva.bind(this)} />;
            }
          })}
          {this.state.canchas.map(cancha => {
            return <Cancha key={cancha.key} cancha={cancha} infoReserva={this.infoReserva.bind(this)} />;
          })}
        </div>
      );
    }
    }
