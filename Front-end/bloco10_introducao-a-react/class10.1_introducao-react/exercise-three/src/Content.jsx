import React from "react";

class Content extends React.Component {
  render () {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    const newContents = conteudos.map((element) => (
      <div key={element.conteudo} className='card'>
        <h4>{`O conteúdo é: ${element.conteudo}`}</h4>
        <p>{`Status: ${element.status}`}</p>
        <p>{`Bloco: ${element.bloco}`}</p>
      </div>
    ))

    return (
      <div className="content">
        {newContents}
      </div>

      /* <div className="content">
      {conteudos.map((element) => (
        <div key={element.conteudo} className="card">
          <h4>{`O conteudo é: ${element.conteudo}`}</h4>
          <p>{`status: ${element.status}`}</p>
          <p>{`bloco: ${element.bloco}`}</p>
        </div>
      ))}
      </div> */ 
      
    );
  }
}

export default Content;