'use strict';
import React, {Component } from 'react';
import {Usuarios} from '../api/usuarios.js'
import {Reservas} from '../api/reservas.js'
import {Partidos} from '../api/partidos.js'
export default class Cancha extends Component{


	constructor(props){
		super(props);
		this.state={

      direccion:'',
      nombreSitio:'',
      tipo:'',
      contacto:'',
      nombreU:''
    }


  }

  render(){

    return (
      <div>
     <div className='container reserva'>
        <div className='reservaI amarillo'>
          <h3>
            NombreSitio: {this.props.cancha.nombreSitio}
            <br></br>
          </h3>
          <p>
          Dirección: {this.props.cancha.direccion}
          <br></br>
          Tipo: {this.props.cancha.tipo}
          <br></br>
          Contacto: {this.props.cancha.contacto}
          </p>
        </div>
        <div className='reservaD'>
            <div className="fotoSitio">
              <img src="/img/cancha.jpg" className="img-responsive imgCancha" alt="fotoCancha"></img>                              </div>
              <div className="infoReservas">
              <label htmlFor="nombre">Escribe tu nombre y haz tu reserva:</label>
              <input onChange={event=>this.usuario(event.target.value)} className="inputText" id="nombre"></input>
              <button className="btn btn-danger" onClick={this.reclutar.bind(this)} href="#">Reserva</button>
            </div>
            </div>
            </div>
        </div>
        
     )
  }

  usuario(val)
  {    
    this.setState(
    {
      nombreU:val
    });
  }

  reclutar()
  {
    var key=this.randomBetween(100,10000);
    var idC=this.props.cancha.key;
    var idR=key+"";
    var precio=2000;
    var cupos = (this.props.cancha.tipo)*2 -1;

    var nombreUsuario=this.state.nombreU;
    var keyU=this.randomBetween(100,10000);
    var idU=keyU+"";

    var keyP=this.randomBetween(100,10000);
    var idP=keyP+'';
    //Post Reserva a nombre de..
    Meteor.call('usuarios.insert', idU, keyU, nombreUsuario);
      
      
    //Post Nueva Reserva
    Meteor.call('reservas.insert', idR, key, precio, cupos, keyU, idC);
    
    //Post Nuevo Partido
    Meteor.call('partidos.insert', idP, keyP, key);
    
    this.props.infoReserva(key,idC);
  }

  // Tomado de https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


}