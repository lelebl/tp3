import React, { Component } from 'react';
import "./contenu"

class Contenu extends Component {
  render() {
    const contenu = this.props.contenu;

    return (
      <div className="contenu-container">
        <p>{contenu}</p>
      </div>
    );
  }
}

export default Contenu;
