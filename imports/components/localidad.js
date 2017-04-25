import React, { Component } from 'react';

export default class Localidad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      selected: false,
    };
  }
  localidadId(loc) {
    document.getElementById("fin").scrollIntoView();
    this.props.reservasL(loc, this.props.ubicacion);
  }
  render() {
    return (
      <button className="btn btn-default active butNeg" href="#b1" onClick={() => this.localidadId(this.props.localidad._id)}>{this.props.localidad.ubicacion}</button>)
  }
}
