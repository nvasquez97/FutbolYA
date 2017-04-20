'use strict';
import React, { Component } from 'react';
import { Reservas } from '../api/reservas.js';
import { LocalidadM } from '../api/localidades.js';
import { Canchas } from '../api/canchas.js';
import InfoPartidos from './infoPartidos';
import { Partidos } from '../api/partidos.js';

export default class InfoReservas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reservas: [],
      reserva: null,
      idReserva: -1,
      escribe: 'Escribe el id de tu reserva: ',
      nombreLoc: '',
      nombreCancha: '',
      partido: null,
    };
  }
  mostrarPartidos () {
    document.getElementsByClassName('infoPartidos')[0].style.display = 'block';
  }
  obtenerTodasReservas () {
    if (this.state.idReserva > 0) {
      const lista = Reservas.find({ key: parseInt(this.state.idReserva) }).fetch();
      const Res = lista[0];
      this.setState({
        reservas: lista,
        reserva: lista[0],
      });
      this.nombreCancha(Res);
      this.nombreLocalidad(Res);
      console.log(parseInt (this.state.idReserva));
      const part = Partidos.find({ id_reserva: parseInt (this.state.idReserva) }).fetch();
      const partid = part[0];
      this.setState({
        partido: partid,
      },
      );
    }
    else if (this.props.idR > 0) {
      const lista = Reservas.find({ key: this.props.idR }).fetch();
      const Res = lista[0];
      this.setState({
        reservas: lista,
        reserva: lista[0],
        idReserva: Res.key,
      });
      this.nombreCancha(Res);
      this.nombreLocalidad(Res);
      const part = Partidos.find({ id_reserva: this.props.idR }).fetch();
      const partid = part[0];
      this.setState({
        partido: partid,
      });
      console.log(partid);
    }
  }

  nombreCancha(reserv) {
    try {
      const lac = Canchas.find({ key: reserv.id_cancha });
      const nombreC = lac.fetch()[0];
      this.setState({
        nombreCancha: nombreC.nombreSitio,
      });
    }
    catch (e) {
      console.log('Undefined');
    }
  }

  nombreLocalidad(reserv) {
    try {
      const lac = Canchas.find({ key: reserv.id_cancha }).fetch();
      const loc = LocalidadM.find({ key: lac[0].id_localidad }).fetch();
      const nombre = loc[0];
      this.setState({
        nombreLoc: nombre.ubicacion,
      });
    }
    catch (e) {
      console.log('Undefined');
    }
  }

  idR(idRes) {
    this.setState({
      idReserva: idRes,
    });
  }
  volver() {
    this.setState({
      reservas: [],
      reserva: null,
      idReserva: -1,
      escribe: 'Escribe el id de tu reserva: ',
      nombreLoc: '',
      nombreCancha: '',
    });
    document.getElementsByClassName('inforr')[0].style.display = 'none';
    document.getElementsByClassName('localidad')[0].style.display = 'block';
  }

  render() {
    Meteor.subscribe('reservas');
    Meteor.subscribe('localidades');
    Meteor.subscribe('canchas');
    Meteor.subscribe('partidos');
    return (
      <div className="inforr" >
        <div className="container">
          <div className="informacion">
            <div className="infoI">
              <h1 id="info">Consulta tu Reserva</h1>
            </div>
            <div className="infoD">
              <button onClick={this.volver.bind(this)} className="btn btn-default derechaIn">Regresar</button>
            </div>
          </div>
          <div> {
         (this.state.reserva !== null || this.props.idR > 0) ?
                   (
                     <div>
                       <div className="table-responsive">
                         <table className="table table-bordered">
                           <thead>
                             <tr>
                               <th>Id Reserva</th>
                               <th>Localidad</th>
                               <th>Cancha</th>
                               <th>Precio</th>
                               <th>Hora</th>
                             </tr>
                           </thead>
                           <tbody>
                             <tr key={this.state.reserva._id}>
                               <td >{this.state.reserva._id}</td>
                               <td>{this.state.nombreLoc}</td>
                               <td >{this.state.nombreCancha}</td>
                               <td>$ {this.state.reserva.precio}</td>
                               <td>4:00</td>
                             </tr>
                           </tbody>
                         </table>
                       </div>
                       <InfoPartidos partido={this.state.partido} idreserva={this.state.idReserva} />
                     </div>)
                :
                     <div className="amarillo escribe">
                       <label htmlFor="idReserva">{this.state.escribe}</label>
                       <input id="idReserva" type="text" className="inputText" onChange={event => this.idR(event.target.value)} />
                       <div>
                         <button onClick={this.obtenerTodasReservas.bind(this)} className="btn btn-danger active">Busca tu reserva</button>
                       </div>
                     </div>
                 }
          </div>
        </div>
      </div>
    );
  }

}
