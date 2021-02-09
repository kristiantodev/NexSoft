import React, { Component } from 'react';
import "./style.css"

class Texarea extends Component {
    constructor(props) {
        super(props);
        this.state = {
               
           }
    }

    render() {
        return (
          <>

    <textarea id="alamat" className="input" placeholder="Masukan Alamat"></textarea>

      </>

        );
    }
}

export default Texarea;