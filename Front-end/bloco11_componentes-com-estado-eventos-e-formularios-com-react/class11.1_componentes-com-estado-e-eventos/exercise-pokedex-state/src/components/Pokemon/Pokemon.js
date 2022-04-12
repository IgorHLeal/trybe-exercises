import React, { Component } from "react";
import PropTypes from 'prop-types';
/* import './Pokedex.css'; */
import'./Pokemon.css';
class Pokemon extends Component {
    render () {
        const { name, type, averageWeight, image } = this.props.pokemon;
        return (
            <section className="pokemon">
                <div>
                    <h3>{name}</h3>
                    <p>{type}</p>
                    {<p>averageWeight: {averageWeight.value} {averageWeight.measurementUnit}</p>}
                </div>
                <img src={image} alt={name} />
            </section>
        );
    }
}

Pokemon.propTypes = {
    pokemonData: PropTypes.shape ({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        averageWeight: PropTypes.shape ({
            value: PropTypes.number.isRequired,
            measurementUnit: PropTypes.string.isRequired
        }),
        image: PropTypes.string.isRequired
    })
}

export default Pokemon;