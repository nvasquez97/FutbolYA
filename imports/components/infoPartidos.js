'use strict';
import React, { Component } from 'react';

export default class InfoPartidos extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      marcador1: this.props.partido.marcador1,
      marcador2: this.props.partido.marcador2,
    };
  }

  golEquipo(num) {
    if (num === 2) {
      const goles = this.state.marcador2 + 1;
      this.setState({
        marcador2: goles,
      });
      // update partidos
      Meteor.call('partidos.update', this.props.partido._id, this.props.partido.key, this.state.marcador1, goles, parseInt(this.props.idreserva));
     }
    else {
      const goles = this.state.marcador1 + 1;
      this.setState({
        marcador1: goles,
      });
            // update partidos
            Meteor.call('partidos.update', this.props.partido._id, this.props.partido.key, goles, this.state.marcador2, parseInt(this.props.idreserva));
    }
    document.getElementById("fin").scrollIntoView();
  }
  render() {
    return (
      <div className="infoPartidos" id="partido">
        <h1 className="titulo">Lleva el puntaje de tu partido!</h1>
        <div className="puntaje">
          <h className="reservaPartido">Reserva: 1</h><br />
          <br />
          <div className="row">
            <div className="col-md-4">
              <div className="izquierda">
                <label className="equipo amarillo">Equipo No.1 :</label>
                <label className="goles amarillo">{this.state.marcador1}</label>
                <br />
                <a href="#Gol" className="ve" onClick={() => this.golEquipo(1)} title="Gol Equipo 1">
                  <i className="fa fa-futbol-o fa-3x" /></a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="centro">
                <h3 className="amarillo">
            VS.
                </h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="derechaD">
                <label className="equipo amarillo">Equipo No.2 :</label>
                <label className="goles amarillo">{this.state.marcador2}</label>
                <br />
                <a className="ve" onClick={() => this.golEquipo(2)} title="Gol Equipo 2">
                  <i className="fa fa-futbol-o fa-3x" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
