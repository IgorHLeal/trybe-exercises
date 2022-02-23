import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      techs: 'React',
      idade: 18,
      confirmarPresenca: false,
      informacoes: '',
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
          <label>Selecione as tecnologias favoritas:
            <select name='techs'
                    value={this.state.techs}
                    onChange={this.handleChange}
            >
              <option value='React'>React</option>
              <option value='JavaScript'>JavaScript</option>
              <option value='Python'>Python</option>
              <option value='PHP'>PHP</option>
              <option value='C#'>C#</option>
              <option value='Java'>Java</option>
            </select>
          </label>


          <label>Qual a sua idade?
            <input 
              type='number'
              name='idade'
              value={this.state.idade}
              onChange={this.handleChange}
              />
          </label>

          <label>Confirmar presença
            <input
              type='checkbox'
              name='confirmarPresenca'
              value={this.state.confirmarPresenca}
              onChange={this.handleChange}
            />
          </label>

          <label>Informações adicionais:
            <textarea 
              name='informacoes'
              value={this.state.informacoes} 
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default Form;
