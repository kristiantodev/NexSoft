import React, { Component } from 'react';
import "./style.css"

class Textarea extends Component {
    constructor(props) {
        super(props);
        this.state = {
               
           }
    }

    render() {
        const { name, onChange, placeholder, value} = this.props
        return (
          <>

      <textarea className="input" name={name} onChange={onChange} placeholder={placeholder} value={value} />

      </>

        );
    }
}

export default Textarea;