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
        <div className="inforr">
        <p>
        Tu reserva tiene el id: {this.state.idReserva}
        </p>
        </div>
  			<div className="futbolYa">
  				<FutbolYa/>
  			</div>

  			<div className="localidad">
  				<Localidades obtenerReservas={this.obtenerReservas.bind(this)}/>
  			</div>

  			<div className="buscar"><Buscar reserva={this.state.reserva} localidad={this.state.localidadId} infoReserva={this.infoReserva.bind(this)}/></div>
        
  			</div>
  			);
  	}

    infoReserva(num, idC)
    {
      this.setState({
        idReserva:num
      });
      document.getElementsByClassName('inforr')[0].style.display='block';
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
