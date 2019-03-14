import React, { Component } from 'react';
import Photo from "./Photo/photo";
import Nom from "./Nom/nom";
import Naissance from "./Naissance/naissance";
import Contenu from "./contenu/contenu";
import Date from "./date/date";
import { Button } from 'reactstrap';
import "./bloc.css"


class Bloc extends Component {
    render() {
    
      const { photo, nom, naissance, contenu, date } = this.props.data;
      return (
        <div>
        <div className="bloc-container">
          <Photo photo={photo}/>
          <Nom nom={nom}/>
          <Naissance naissance={naissance}/>
        <Button type="button" size="lg">CHANGE COLOR</Button>
        </div>

        <div className= "comment">
          <Contenu contenu={contenu}/>
          <div className="date">
          <Date date={date}/>
          </div>
          <div className="button"> <Button size="lg" color="warning">C'EST SUPER </Button></div> 
        </div></div>
      );
    }
  }
  
  export default Bloc;