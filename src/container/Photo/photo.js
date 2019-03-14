import React, { Component } from 'react';
import "./photo.css"

class Photo extends Component {
  render() {
    const { photo } = this.props;
    const { src, alt } = photo;
  

    return (
      <div className="photo-container">
        <img src={src} alt={alt}/>
      </div>
    );
  }
}


export default Photo;