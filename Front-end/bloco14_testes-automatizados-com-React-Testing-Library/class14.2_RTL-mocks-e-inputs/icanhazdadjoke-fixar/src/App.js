import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    };
  }

  componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: {Accept: 'application/json' } })
    .then((response) => response.json())
    .then((data) => this.setState({ joke: data.joke }));
  }

  render() {
    const { joke } = this.state;
    return (
      <div className='App'>
        <h3>Joke:</h3>
        {joke}
      </div>
    );
  }
}
