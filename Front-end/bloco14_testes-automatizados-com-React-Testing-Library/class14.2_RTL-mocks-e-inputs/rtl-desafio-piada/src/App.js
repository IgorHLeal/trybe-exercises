import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      joke: ''
    }
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => this.setState({joke: data.value}));
  }

  render() {
    return (
      <div>
        <h1>Piadas do Chuck Norris</h1>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

export default App