'use strict';
import React, {Component } from 'react';
const URL="https://futbolyabackend.herokuapp.com/";
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
        <div className='reservaI blanco'>
          <h4>
            NombreSitio: {this.props.cancha.nombreSitio}
          </h4>
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
              <img src="./style/img/cancha.jpg" className="img-responsive imgCancha" alt="fotoCancha"></img>                              </div>
              <div className="infoReservas">
            <p>Escribe tu nombre y haz tu reserva:</p>
              <input onChange={event=>this.usuario(event.target.value)}></input>
              <button className="btn btn-danger" onClick={this.reclutar.bind(this)}>Reserva</button>
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

  showreclutar()
  {
    var pos =0;
    console.log(this.props.pos);
      document.getElementsByClassName('infoReservas')[this.props.pos].style.display='block';
  }

  reclutar()
  {
      var idR=this.randomBetween(100,10000);
    var idC=this.props.cancha._id;
    var key=idR;
    var precio=this.props.cancha.precio;
    var cupos = (this.props.cancha.tipo)*2 -1;

    var nombreUsuario=event.target.value;
    var idU=this.randomBetween(100,10000);

    //Post Reserva a nombre de..
    axios.post(URL+'usuarios',
    {
      "_id": idU,
      "nombre":nombreUsuario
    }).then(
    response=>{
      
    })
    

    console.log(idR);
    axios.post(URL+'reservas',
      //Post Nueva Reserva
    {
      "_id": idR,
      "key": key,
      "precio": precio,
      "cupos": cupos,
      "id_usuario": idU,
      "id_cancha": idC
    }).then(
    response=>{
      this.props.infoReserva(idR, idC);
    })
    
    
  }

  // Tomado de https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


}