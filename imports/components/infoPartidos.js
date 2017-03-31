'use strict';
import React, { Component } from 'react';
import {Partidos} from '../api/partidos.js'
export default class InfoPartidos extends Component {
    
    constructor(props)
      {
            super(props);
            console.log(this.props);
            this.state={
                  marcador1:this.props.partido.marcador1,
                  marcador2:this.props.partido.marcador2
            }
      }

    render() {
        return (
            <div className="infoPartidos" >
            <h1 className="titulo">Lleva el puntaje de tu partido!</h1>
            <div className="puntaje">
            <h className="reservaPartido">Reserva: 1</h><br></br>
            <br></br>
            <div className='row'>
            <div className='col-md-4'>
            <div className="izquierda">
            <label className="equipo amarillo">Equipo No.1 :</label>
            <label className="goles amarillo">{this.state.marcador1}</label>
            <br/>
            <a href="#Gol" className="ve" onClick={()=>this.golEquipo(1)} title="Gol Equipo 1">
                  <i className="fa fa-futbol-o fa-3x"></i></a>
            </div>
            </div>
            <div className='col-md-4'>
            <div className="centro">
            <h3 className="amarillo">
            VS.
            </h3>
            </div>
            </div>
            <div className='col-md-4'>
            <div className="derechaD">
            <label className="equipo amarillo">Equipo No.2 :</label>
            <label className="goles amarillo">{this.state.marcador2}</label>
            <br/>
            <a href="#Gol" className="ve" onClick={()=>this.golEquipo(2)} title="Gol Equipo 2">
                  <i className="fa fa-futbol-o fa-3x"></i></a>
            </div>
            </div>
            </div>
            </div>
            </div>
            );
    }
    golEquipo(num)
    {
      if(num===2)
      {
            var goles = this.state.marcador2+1;
      this.setState(
      {
            marcador2:goles
      });
      Partidos.update({"_id":this.props.partido._id},
            {
                  "key": this.props.partido.key,
                  "marcador1": this.state.marcador1,
                  "marcador2": goles,
                  "id_reserva": parseInt(this.props.idreserva)
            });

      }
      else
      {
            var goles = this.state.marcador1+1;
            this.setState(
            {
            marcador1:goles
            });
            Partidos.update({"_id":this.props.partido._id},
            {
                  "key": this.props.partido.key,
                  "marcador1": goles,
                  "marcador2": this.state.marcador2,
                  "id_reserva": parseInt(this.props.idreserva)
            });
      }
    }
}