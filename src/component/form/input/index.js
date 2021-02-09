import React, { Component } from 'react';
import "./style.css"

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
               
           }
    }

    render() {
        return (
          <>

      <input type={this.props.type} className="input" name={this.props.name} id={this.props.id} placeholder="Masukan Nama"/>

      </>

        );
    }
}

export default Input;