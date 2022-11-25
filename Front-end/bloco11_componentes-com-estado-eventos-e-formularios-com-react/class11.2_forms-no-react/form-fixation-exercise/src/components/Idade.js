import React, { Component } from "react";

class Idade extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if(value > 120) error = 'Idade inválida!';

    return (
      <label>Qual a sua idade?
        <input 
          type='number'
          name='idade'
          value={ value }
          onChange={ handleChange }
          />

          <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default Idade;
