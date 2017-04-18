  'use strict';
  import React, { Component } from 'react';
  import FutbolYa from './futbolYa';
  import Localidades from './localidades';
  import Buscar from './buscar';
  import InfoReservas from './infoReservas';
  import Cancha from './cancha';
  import InfoPartidos from './infoPartidos';
  import { Reservas } from '../api/reservas.js';

  export default class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        reserva: '',
        localidadId: -1,
        idReserva: -1,
      };
    }

    getId() {
      return this.state.idReserva;
    }
    irAReserva() {
      document.getElementsByClassName('oculto')[0].style.display = 'none';
      document.getElementsByClassName('localidad')[0].style.display = 'none';
    }
    irACuadro() {
      document.getElementsByClassName('inforr')[0].style.display = 'block';
      document.getElementsByClassName('localidad')[0].style.display = 'none';
    }
    infoReserva(num, idC) {
      const reser = Reservas.find({ key: num }).fetch()[0];
      this.setState({
        idReserva: num,
        reserv: reser,
      });
      document.getElementsByClassName('inforr')[0].style.display = 'block';
      document.getElementsByClassName('oculto')[0].style.display = 'none';
      document.getElementsByClassName('localidad')[0].style.display = 'none';
    }

    obtenerReservas(tipo, num) {
      this.setState = ({
        reserva: tipo,
        localidadId: num,
      });
    }
    render() {
      return (
        <div>
          <div className="futbolYa">
            <FutbolYa irACuadro={this.irACuadro.bind(this)} />
          </div>
          <div className="localidad">
            <Localidades obtenerReservas={this.obtenerReservas.bind(this)} />
          </div>
          <div className="buscar"><Buscar reserva={this.state.reserva} localidad={this.state.localidadId} infoReserva={this.infoReserva.bind(this)} /></div>
          <InfoReservas idR={this.state.idReserva} />
        </div>
      );
    }
  }
