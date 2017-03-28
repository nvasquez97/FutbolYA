'use strict';
import React, { Component } from 'react';
import InfoPartidos from './infoPartidos';
export default class InfoReservas extends Component {
	/*creo que el mejor metodo para hacer que les genere la tabla que ustedes desean con datos variables es crear un componente tablaReserva
	Podrian mandarle por parametro el id de la reserva y él buscar en la base de datos la info y llenar la tabla del padre */
	render() {
		return (
			<div className="inforr" >
				<div className="container">
				<h1 id="info">Consulta tu Reserva</h1>
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
					<tr>
						<td>{this.props.idReserva}</td>
						<td>Suba</td>
						<td>Gataca</td>
						<td>25000</td>
						<td>11:30AM</td>
					</tr>
					</tbody>
				</table>
				</div>
				<InfoPartidos mostrarPartidos={this.mostrarPartidos.bind(this)} />
				</div>
			</div>
			);
		}
	

mostrarPartidos(){
	 document.getElementsByClassName('infoPartidos')[0].style.display='block';
}

}