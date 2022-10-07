import React, { Component } from "react";

class Techs extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>Selecione as tecnologias favoritas:
        <select name='techs'
                value={ value }
                onChange={handleChange}
        >
          <option value='React'>React</option>
          <option value='JavaScript'>JavaScript</option>
          <option value='Python'>Python</option>
          <option value='PHP'>PHP</option>
          <option value='C#'>C#</option>
          <option value='Java'>Java</option>
        </select>
      </label>
    )
  }
}

export default Techs;
