import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      clicksButtonOne: 0,
      clicksButtonTwo: 0,
      clicksButtonThree: 0
    }
  }
  
  handleButtonOne() {
    this.setState((estadoAnterior, _props) => ({
      clicksButtonOne: estadoAnterior.clicksButtonOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.buttonColor(this.state.clicksButtonOne)}`);
    })
  }
  
  handleButtonTwo() {
    this.setState((estadoAnterior, _props) => ({
      clicksButtonTwo: estadoAnterior.clicksButtonTwo + 1,
    }), () => {
      console.log(`Botão 2 ${this.buttonColor(this.state.clicksButtonTwo)}`);
    })
  }
  
  handleButtonThree() {
    this.setState((estadoAnterior, _props) => ({
      clicksButtonThree: estadoAnterior.clicksButtonThree + 1,
    }), () => {
      console.log(`Botão 3 ${this.buttonColor(this.state.clicksButtonThree)}`);
    })
  }

  buttonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }


  render() {
    const { clicksButtonOne, clicksButtonTwo, clicksButtonThree } = this.state
    return (
      <div>
        <button onClick={ this.handleButtonOne }
        style={{ backgroundColor: this.buttonColor(clicksButtonOne)}} > {clicksButtonOne}</button>

        <button onClick={ this.handleButtonTwo }
        style={{ backgroundColor: this.buttonColor(clicksButtonTwo)}} > {clicksButtonTwo}</button>


        <button onClick={ this.handleButtonThree }
        style={{ backgroundColor: this.buttonColor(clicksButtonThree)}} > {clicksButtonThree}</button>
      </div>
    );
  }
}

export default App;
