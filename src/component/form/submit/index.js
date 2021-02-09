import React, { Component } from 'react';
import "./style.css"

class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
               
           }
    }

    render() {
        return (
          <>

          <button type="submit" className="button"><span id="buttonSave">Simpan</span></button>

      </>

        );
    }
}

export default Submit;