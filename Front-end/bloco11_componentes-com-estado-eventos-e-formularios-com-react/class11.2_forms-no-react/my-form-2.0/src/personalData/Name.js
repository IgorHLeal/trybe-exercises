import React, { Component } from "react";

class Name extends Component {
  render() {
    return (
      <label>What is your name?
        <input
          type='text'
          maxLength='40'
          required
        />
      </label>
    )
  }
}

export default Name;
