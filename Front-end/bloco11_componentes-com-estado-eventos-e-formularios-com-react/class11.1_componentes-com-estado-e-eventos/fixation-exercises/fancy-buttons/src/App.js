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
      clicksButtonOne: estadoAnterior.clicksButtonOne + 1
    }))
  }
  
  handleButtonTwo() {
    this.setState((estadoAnterior, _props) => ({
      clicksButtonTwo: estadoAnterior.clicksButtonTwo + 1
    }))
  }
  
  handleButtonThree() {
    this.setState((estadoAnterior, _props) => ({
      clicksButtonThree: estadoAnterior.clicksButtonThree + 1
    }))
  }
  render() {
    console.log(this);
    return (
      <div>
        <button onClick={ this.handleButtonOne }>{this.state.clicksButtonOne}</button>
        <button onClick={ this.handleButtonTwo }>{this.state.clicksButtonTwo}</button>
        <button onClick={ this.handleButtonThree }>{this.state.clicksButtonThree}</button>
      </div>
    );
  }
}

export default App;
