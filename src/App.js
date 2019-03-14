import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Bloc from "./container/bloc";

//mes donnees 
const bloc1 = {
  photo: {
    src: "http://cache.magicmaman.com/data/photo/w800_c18/4j/maquillage-ado.jpg",
  alt: "JEANNE"
  },
  nom: "Jeanne Artengi",
  naissance: "10/05/1997",
  contenu: "Bonjour je m'appelle Jeanne  ",
  date: "12/02/2019"

}

const bloc2 = {
  photo: {
    src: "https://www.famillechretienne.fr/var/fc/storage/images/media/images/articles/ado-zelie/43391169-1-fre-FR/ado-zelie_article_large.jpg",
  alt: "CLAUDE"
  },
  nom: "Claude Bourget",
  naissance: "17/02/1994",
  contenu: "Bonjour je m'appelle pas Jeanne  mais claude",
  date: "03/03/2019"

}

const bloc3 = {
  photo: {
    src: "https://www.tuxboard.com/photos/2015/02/femme-dirigeante-helle-thorning-schmidt-danemark.jpg",
  alt: "MARTINE"
  },
  nom: "Martine Orangere",
  naissance: "03/09/1999",
  contenu: "Bonjour je m'appelle pas Jeanne  pas claude mais martine ", 
  date: "01/02/2019"

}

 

class App extends Component {

  constructor(props){
    super(props);
    this.state={
        user: {
          photo: {
            src: "http://cache.magicmaman.com/data/photo/w800_c18/4j/maquillage-ado.jpg",
          alt: "JEANNE"
          },
          nom: "Jeanne Artengi",
          naissance: "10/05/1997",
          contenu: "Bonjour je m'appelle Jeanne  ",
          date: "12/02/2019"        

            },
       
    }
}

jeanne(){
    
    this.setState({user : bloc1});
   
    }
martine(){
       
    this.setState({user :bloc3});
    }
claude(){
    

    this.setState({user : bloc2});
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
       
        <div class="btn-group">
         <Button onClick={()=>{this.jeanne()}} type="button"  size="lg" color="danger">JEANNE</Button>
          <Button  onClick={()=>{this.martine()}}  type="button"  size="lg" color="danger">MARTINE</Button>
          <Button  onClick={()=>{this.claude()}}  type="button"  size="lg" color="danger">CLAUDE</Button>
          </div> 
        <div className="profil">
          <br/><br/> <br/> <br/>
         <Bloc data={this.state.user} />
         </div>
  
        </header>
      </div>

      
    );
  }
  
 /* changeColor()
  {
    switch(randomnumber)
    {
              case 1:
                document.body.style.backgroundColor= "green";
                break;
              case 2:
                document.body.style.backgroundColor= "blue";
                break;
              case 3:
                App.backgroundColor="blue";
                break;  
              default:
              break;
    }   
  } */

}

export default App;
