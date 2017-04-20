'use strict';
import React, { Component } from 'react';

export default class Cancha extends Component {


  constructor(props) {
    super(props);
    this.state = {
      direccion: '',
      nombreSitio: '',
      tipo: '',
      contacto: '',
      nombreU: '',
    };
  }
  usuario(val) {
    this.setState = ({
      nombreU: val,
    });
  }

  reclutar() {
    const key = this.randomBetween(100, 10000);
    const idC = this.props.cancha.key;
    const idR = key + '';
    const precio = 2000;
    const cupos = (this.props.cancha.tipo)*2 -1;

    const nombreUsuario = this.state.nombreU;
    const keyU = this.randomBetween(100, 10000);
    const idU = keyU + '';

    const keyP = this.randomBetween(100, 10000);
    const idP = keyP + '';
    // Post Reserva a nombre de..
    Meteor.call('usuarios.insert', idU, keyU, nombreUsuario);
    // Post Nueva Reserva
    Meteor.call('reservas.insert', idR, key, precio, cupos, keyU, idC);
    // Post Nuevo Partido
    Meteor.call('partidos.insert', idP, keyP, key);
    this.props.infoReserva(key, idC);
  }

  // Tomado de https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  render() {
    return (
      <div>
        <div className="container reserva">
          <div className="reservaI amarillo">
            <h3>
            NombreSitio: {this.props.cancha.nombreSitio}
              <br />
            </h3>
            <p>
          Dirección: {this.props.cancha.direccion}
              <br />
          Tipo: {this.props.cancha.tipo}
              <br />
          Contacto: {this.props.cancha.contacto}
            </p>
          </div>
          <div className="reservaD">
            <div className="fotoSitio">
              <img src="/img/cancha.jpg" className="img-responsive imgCancha" alt="fotoCancha" />
            </div>
            <div className="infoReservas">
              <label htmlFor="nombre">Escribe tu nombre y haz tu reserva:</label>
              <input onChange={event => this.usuario(event.target.value)} className="inputText" id="nombre" />
              <button className="btn btn-danger" onClick={this.reclutar.bind(this)} href="#">Reserva</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}