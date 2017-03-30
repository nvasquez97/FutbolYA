'use strict';
import React, { Component } from 'react';
export default class InfoPartidos extends Component {
    
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
            <label className="equipo">Equipo #1</label>
            <label className="goles" >3</label>
            <i className="fa fa-futbol-o fa-3x"></i>
            </div>
            </div>
            <div className='col-md-4'>
            <div className="centro">
            <h3>
            VS.
            </h3>
            </div>
            </div>
            <div className='col-md-4'>
            <div className="derechaD">
            <label className="equipo">Equipo #2</label>
            <label className="goles">2</label>
            <i className="fa fa-futbol-o fa-3x"></i>
            </div>
            </div>
            </div>
            </div>
            </div>
            );
    }
}