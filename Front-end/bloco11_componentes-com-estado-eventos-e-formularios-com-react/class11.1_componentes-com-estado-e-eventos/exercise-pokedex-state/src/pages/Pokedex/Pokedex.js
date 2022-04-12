import React, { Component } from "react";
import Pokemon from "../../components/Pokemon/Pokemon";
/* import pokemons from "../data"; */
import './Pokedex.css';

class Pokedex extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }

    clickBtn = () => {
        this.setState((prevState, props) => ({ index: props.pokemons.length - 1 === prevState.index ? 0 : prevState.index + 1 }));
    }

    render() {
        return (
            <>
                <div className='pokedex-container'>
                    <Pokemon pokemon={this.props.pokemons[this.state.index]} />
                </div>

                <div>
                    <button type='button' onClick={this.clickBtn}>Next Pokemon</button>
                </div>
            </>
        )
    }
}

export default Pokedex;
