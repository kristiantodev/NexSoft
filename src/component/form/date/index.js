import React, { Component } from 'react';
import "./style.css"

class Date extends Component {
    constructor(props) {
        super(props);
        this.state = {
               
           }
    }

    render() {
        return (
          <>
      <input type={this.props.type} className="input" name={this.props.name} id={this.props.id}/>

      </>

        );
    }
}

export default Date;