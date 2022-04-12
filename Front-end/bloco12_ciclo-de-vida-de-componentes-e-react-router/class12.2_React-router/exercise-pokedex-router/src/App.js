import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
   <>
   <Route exact path='/'
      render={Pokedex} />
    
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
   </> 
    );
  }
}

export default App;