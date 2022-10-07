import React, { Component } from "react";

class Infos extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if(value.length > 500) error = 'O texto excedeu o limite de caracteres';

    return (
      <fieldset className='infos'>
        <label>Informações adicionais:
          <textarea 
            name='informacoes'
            value={value} 
            onChange={handleChange}
          />
          <span>{error ? error : ''}</span>
        </label>
      
        <label>Upload de arquivo: 
          <input 
            name='file'
            type='file'            
          />
        </label>
      </fieldset> 
    )
  }
}

export default Infos;
