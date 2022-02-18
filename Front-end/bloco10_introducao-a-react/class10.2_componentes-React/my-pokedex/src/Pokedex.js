import React, { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";
import './Pokedex.css';

class Pokedex extends Component {
    render () {
        return (
            <main>
                <h1>My Pokedex</h1>
                <div className='pokedex-container'>
                    {pokemons.map((pokemon) => {
                        return (<Pokemon key={pokemon.id} pokemonData={pokemon} />)
                    })}
                </div>
            </main>     
        );
    }
}

export default Pokedex;