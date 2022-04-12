import './App.css';
import React from 'react';
import Pokedex from './pages/Pokedex/Pokedex';
import pokemons from './services/data';

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons}/>
      </div>
    )
  }
}

export default App;
