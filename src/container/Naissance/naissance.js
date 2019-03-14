import React, { Component } from 'react';
import "./naissance.css"; 


class Naissance extends Component {
  render() {
    const naissance = this.props.naissance;
    
    return (
      <div className="naissance-container">
        <p>{naissance}</p>
      </div>
    );
  }
}

export default Naissance;
