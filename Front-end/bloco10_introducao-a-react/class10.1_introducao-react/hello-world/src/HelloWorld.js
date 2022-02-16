// Para criar um novo componente
// Criar um novo arquivo na pasta src

// 1° - importar o react
import React from 'react';

class HelloWorld extends React.Component {
    render() {
        return (
            <>
            <h1>Hello world</h1>
            <p>Bem vindo ao mundo espetacular do ReactJS</p>
            </>
        )
    }
}

export default HelloWorld;