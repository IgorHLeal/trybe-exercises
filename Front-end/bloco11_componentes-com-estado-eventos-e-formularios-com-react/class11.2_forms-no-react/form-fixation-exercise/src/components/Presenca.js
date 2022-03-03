import React, { Component } from "react";

class Presenca extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>Confirmar presença
        <input
          type='checkbox'
          name='confirmarPresenca'
          value={value}
          onChange={handleChange}
        />
      </label>  
    )
  }
}

export default Presenca;
