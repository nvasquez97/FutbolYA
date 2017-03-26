  'use strict';
  import React, { Component } from 'react';

  import Reserva from './reserva'
  import Cancha from './cancha'
  import {Reservas} from '../api/reservas.js'
  import {Canchas} from '../api/canchas.js'
  export default class Buscar extends Component {


    constructor(props)
    {
      super(props);
      this.state={
        reservas:[],
        canchas:[],
        id:'',
        tipo:'',
        localidades:'',
        descripcion: '',
        estado:''

      }
    }

    render() {
      return (
        <div className="container oculto">
        <h1 className="rojo">
        <strong>{this.props.reserva}</strong> en tu cancha favorita:
        </h1>
        <div className='row'>
        <button className="btn btn-default" onClick={()=>this.obtenerReservas(5)}>Fútbol 5</button>
        <button className="btn btn-default" onClick={()=>this.obtenerReservas(7)}>Fútbol 7</button>
        <button className="btn btn-default" onClick={()=>this.obtenerReservas(8)}>Fútbol 8</button>
        <button className="btn btn-default" onClick={()=>this.obtenerReservas(11)}>Fútbol 11</button>
        </div>
        <h3 className="amarillo">{this.state.descripcion}<strong>{this.state.tipo}</strong></h3>
        
        {this.state.reservas.map(reserva => {
          return <Reserva key={reserva.key} reserva={reserva} nombreC={this.obtenerNombreCancha(reserva.id_cancha)}/>
        })}        
        {this.state.canchas.map(cancha => {
          return <Cancha key={cancha.key} cancha={cancha} infoReserva={this.infoReserva.bind(this)}/>
        })}
        </div>
        );
      }

      infoReserva(num, idC)
      {
       this.setState({
        reservas:[],
        canchas:[],
        id:'',
        tipo:'',
        localidades:'',
        descripcion: '',
        estado:''
      });
       this.props.infoReserva(num, idC);
       document.getElementsByClassName('oculto')[0].style.display='none';
      }

      obtenerNombreCancha(idcancha)
      {
          var lac =Canchas.find({"_id":idcancha});
          var nombreC =lac.fetch();
          return nombreC[0].nombreSitio;
      }

      obtenerReservas(num) {
        var idloc=this.props.localidad;
        if(this.props.reserva==='Busca')
        {
          let lcanchas = Canchas.find({'id_localidad':idloc,'tipo':num}).fetch();
          var reservar = [];
          lcanchas.map(cancha =>
          {
            reservar =reservar.concat(Reservas.find({'id_cancha':cancha._id}).fetch());        
          });
           this.setState({
             reservas: reservar,
             canchas:[],
              tipo: 'Fútbol '+num,
              descripcion:'Mira reservas para '
            })
        }
        else
        {
          let recluta = Canchas.find({'id_localidad':idloc,'tipo':num})
            this.setState({
              canchas: recluta.fetch(),
              reservas:[],
              tipo: 'Fútbol '+num,
              descripcion:'Intenta reclutar en: '
            })
        }
      }
    }
