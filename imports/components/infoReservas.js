'use strict';
import React, { Component } from 'react';
import {Reservas} from '../api/reservas.js'
import {Localidades} from '../api/localidades.js'
import {Canchas} from '../api/canchas.js'
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
			escribe:`Escribe el id de tu reserva: `,
			nombreLoc:'',
			nombreCancha:''
		}
	}

	render() {
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

			<div>
			{
				(this.state.reserva!==null)?
               
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
                    		<td>Suba</td>
		                    <td >{this.state.reserva.precio}</td>
                    		<td>345</td>
                    		<td>4:00</td>
	                    </tr>
                    	</tbody>
					</table>
					</div>
					<InfoPartidos mostrarPartidos={this.mostrarPartidos.bind(this)} />
					</div>)
                :
                <div className="amarillo escribe">
                    <label htmlFor="idReserva">{this.state.escribe}</label>
                    <input id="idReserva" type="text" className="inputText" onChange={event=>this.idR(event.target.value)}></input>                
                    <div>
                    	<button onClick={this.obtenerTodasReservas.bind(this)} className="btn btn-danger">Busca tu reserva</button>
                    </div>
                    </div>
			}

			</div>
					</div>
					</div>
					);
				}



	
	mostrarPartidos(){
		document.getElementsByClassName('infoPartidos')[0].style.display='block';
	}
	obtenerTodasReservas(){
		console.log('obtiene');
		console.log(this.state.idReserva);
		console.log(typeof(parseInt(this.state.idReserva)));
		if(this.state.idReserva>0)
		{
			var lista = Reservas.find({"key":parseInt(this.state.idReserva)}).fetch();
			console.log(lista);
			var Res=lista[0];
			this.setState({
				reservas:lista,
				reserva:lista[0]
			});		
			this.nombreCancha(Res);
			this.nombreLocalidad(Res);
		}
		else if(this.props.idR>0)
		{
			var lista = Reservas.find({"key":this.props.idR}).fetch();
			var Res=lista[0];
			
			this.setState({
				reservas:lista,
				reserva:lista[0],
				idReserva:Res.key
			});	
			this.nombreCancha(Res);
			this.nombreLocalidad(Res);
		}
		else
		{

		}
		
		
	}

	nombreCancha(reserv){
		try
		{
		var lac =Canchas.find({"key":reserv.id_cancha});
        var nombreC =lac.fetch()[0];
        this.setState({
        	nombreCancha:nombreC.nombreSitio
        });	
		}
		catch(e){
			console.log('Undefined');
		}
	}

	nombreLocalidad(reserv)
	{
		try{
			var lac =Canchas.find({"key":reserv.id_cancha}).fetch();
		var loc=Localidades.find({"key":lac[0].id_localidad}).fetch();
		var nombre=loc[0];
		this.setState({
			nombreLoc:nombre.ubicacion
		});
		}
		catch(e)
		{
			console.log('Undefined')
		}
		
		
	}

	idR(idRes){
		this.setState(
		{
			idReserva:idRes
		});
	}
	volver(){
		this.setState(
		{
			reservas:[],
			reserva:null,
			idReserva:-1,
			escribe:`Escribe el id de tu reserva: `,
			nombreLoc:'',
			nombreCancha:''
		});
		document.getElementsByClassName('inforr')[0].style.display='none';
      	document.getElementsByClassName('localidad')[0].style.display='block';
      	
	}

}