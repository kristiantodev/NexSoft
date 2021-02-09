import React, { Component } from 'react';
import "./style.css"

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
               
           }
    }

    render() {
        return (
          <>

      <select id="agama" className="input">
        <option value="">-- Pilih Agama --</option>
        <option value="Islam">Islam</option>
        <option value="Kristen">Kristen</option>
        <option value="Hindu">Hindu</option>
        <option value="Budha">Budha</option>
    </select>

      </>

        );
    }
}

export default Select;