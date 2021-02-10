import React, { Component } from 'react';
import "./style.css"

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
               
           }
    }

    render() {
        const { type, name, onChange, placeholder, value } = this.props
        return (
          <>

      <input type={type} className="input" name={name} onChange={onChange} placeholder={placeholder} value={value}/>

      </>

        );
    }
}

export default Input;