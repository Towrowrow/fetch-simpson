import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Compo from "./Compo";
import Displaysimpson from "./DisplaySimpson";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      citation: "",
    }

  }
  simpson() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          citation: data[0],
        });
      });
  }
  render() {

    return (
      <div className="App">

        <Compo
          simpson={() => this.simpson()} />

        <Displaysimpson
          image={this.state.citation.image}
          character={this.state.citation.character}
          quote={this.state.citation.quote} />

      </div>
    );
  }
}

export default App;
