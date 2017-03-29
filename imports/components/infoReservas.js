'use strict';
import React, { Component } from 'react';
import {Reservas} from '../api/reservas.js'
import InfoPartidos from './infoPartidos';
export default class InfoReservas extends Component {

	constructor(props)
	{
		super(props);
		this.state=
		{
			reservas:[],
			reserva:null,
			idReserva:-1,
			escribe:`Escribe el id de tu reserva: `
		}
	}

	render() {
		return (
			<div className="inforr" >
			<div className="container">
			<h1 id="info">Consulta tu Reserva</h1>
			
			{
				(this.state.reserva!==null)?
               
                   (
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
                    		<td>Suba</td>
		                    <td >{this.state.reserva.precio}</td>
                    		<td>345</td>
	                    </tr>
                    	</tbody>
					</table>
					</div>)
                :
                <div className="amarillo">
                    <label htmlFor="idReserva">{this.state.escribe}</label>
                    <input id="idReserva" type="text" className="inputText" onChange={event=>this.idR(event.target.value)}></input>                
                    </div>
			}
					
					<InfoPartidos mostrarPartidos={this.mostrarPartidos.bind(this)} />
					</div>
					</div>
					);
				}



	
	mostrarPartidos(){
		document.getElementsByClassName('infoPartidos')[0].style.display='block';
	}
	obtenerTodasReservas(){
		var lista = Reservas.find({}).fetch();
		this.setState({
			reservas:lista,
			reserva:lista[0]
		});
	}

	idR(idRes){
		this.setState(
		{
			idReserva:idRes
		});
	}

			}