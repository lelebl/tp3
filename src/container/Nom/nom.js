import React, { Component } from 'react';
import "./nom"

class Nom extends Component {
  render() {
    const nom = this.props.nom;

    return (
      <div className="nom-container">
        <p>{nom}</p>
      </div>
    );
  }
}

export default Nom;
