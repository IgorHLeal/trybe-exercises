import React, { Component } from "react";
import Name
 from "./personalData/Name";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      countryState: '?',
      adressType: '?',
    }
  }
  render() {
    return (
      <div className="form-container">
        <h1>My Form in React</h1>

        <form className="form">
          <fieldset className="fieldset">
            <Name />

          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;
