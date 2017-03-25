  'use strict';
  import React, { Component } from 'react';

  export default class FutbolYa extends Component {

     /**les recomiendo para estas funcionalidades de FutbolYa crear componentes que renderizen aqui mismo. Los pueden crear
         desde el render y ellos a su vez crearan los espacios para llenar y etc si el usuario asi lo desea.. si no lo hacen asi
         no me queda tan claro como podrian hacer los cambios entre paths con react :/ */

    render() {
      return (
        <div className="container">
        <h1 className="tit">Fútbol Ya!</h1>
        <h3 className="subTit">
          Fútbol Ya es una página que te permite encontrarte con todos los espacios que quieras para jugar fútbol, puedes encontrar equipos que estén buscando gente, o puedes crear tu propia sesión reservando una cancha e invitando a los demás a que se animen a jugar contigo. ¡Inténtalo!
        </h3>
        <p className="derecha">
          ¿Ya tienes equipo? <a href="" className="ve">
            Ve a tu reserva <i className="fa fa-hand-o-right"></i></a>
        </p>

        <p className="baja">Para buscar y/o reclutar un equipo baja:
          <br></br>
           <i className="fa fa-sort-down"></i></p>
        </div>
      );
    }
  }
