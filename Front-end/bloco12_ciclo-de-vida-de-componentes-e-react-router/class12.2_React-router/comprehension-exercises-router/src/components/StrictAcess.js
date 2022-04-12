import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class StrictAcess extends Component {
  render() {
    const message = 'Welcome joao!'
    const { username, password } = this.props.user;
    if (username !== 'joao' || password !== '1234') {
      alert('Acesso negado!');
      return <Redirect to='/' />
    }

    return (
      <p>{ message }</p>
    )
  }
}

export default StrictAcess;
