  'use strict';
  import React, { Component } from 'react';
  import FutbolYa from './futbolYa';
  import Localidades from './localidades';
  import Buscar from './buscar';
  import InfoReservas from './infoReservas';
  import Cancha from './cancha';

  export default class App extends Component {

  	constructor(props)
  	{
  		super(props);
      this.state=
      {
        reserva:'',
        localidadId: -1,
        idReserva:-1
      }
  	}

  	render()
  	{
  		return(
  			<div>
  			<div className="futbolYa">
  				<FutbolYa irAReserva={this.irAReserva.bind(this)}/>
  			</div>
  			<div className="localidad">
  				<Localidades obtenerReservas={this.obtenerReservas.bind(this)}/>
  			</div>
  			<div className="buscar"><Buscar reserva={this.state.reserva} localidad={this.state.localidadId} infoReserva={this.infoReserva.bind(this)}/></div>
        <div className="inforr">
        <p>
        Tu reserva tiene el id: {this.state.idReserva}
        </p>
        </div>
  			</div>
  			);
  	}

    irAReserva()
    {
      document.getElementsByClassName('oculto')[0].style.display='none';
      document.getElementsByClassName('localidad')[0].style.display='none';
      document.getElementsByClassName('inforr')[0].style.display='block';
    }
    infoReserva(num, idC)
    {
      console.log('pasa');
      this.setState({
        idReserva:num
      });
      document.getElementsByClassName('inforr')[0].style.display='block';
      document.getElementsByClassName('oculto')[0].style.display='none';
      document.getElementsByClassName('localidad')[0].style.display='none';
    }

    obtenerReservas(tipo, num)
    {
      this.setState(
      {
        reserva:tipo,
        localidadId:num
      });
    }
  }
