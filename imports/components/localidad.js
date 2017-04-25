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
    this.props.reservasL(loc, this.props.ubicacion);
  }
  render() {
    return (
      <button className="btn btn-default active butNeg" href=".oculto" onClick={() => this.localidadId(this.props.localidad._id)}>{this.props.localidad.ubicacion}</button>)
  }
}
