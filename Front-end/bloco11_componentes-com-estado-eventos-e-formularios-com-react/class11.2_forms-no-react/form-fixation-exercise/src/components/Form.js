import React, { Component } from "react";
import Techs from "./Techs";
import Idade from "./Idade";
import Presenca from "./Presenca";
import Infos from "./Infos";
class Form extends Component {
  constructor() {
    super();

    this.state = {
      techs: 'React',
      idade: 18,
      confirmarPresenca: false,
      informacoes: '',
      formularioComErros: true,
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value});
  }

  render() {
    return (
      <div className="form-container">
        <h1>Meu Formulário React</h1>

        <form className="form">
          <fieldset className='fieldset'>
            <Techs value={this.state.techs} handleChange={this.handleChange} />

            <Idade value={this.state.idade} handleChange={this.handleChange} />

            <Presenca value={this.state.confirmarPresenca} handleChange={this.handleChange} />

            <Infos value={this.state.informacoes} handleChange={this.handleChange} />
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;
