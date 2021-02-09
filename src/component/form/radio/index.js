import React, { Component } from 'react';
import "./style.css"

class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {
               
           }
    }

    render() {
        return (
          <>

      <input type="radio" className="radio" name='jk' id="jk" value="L"/><span>Laki-laki</span>
      <input type="radio" name='jk' id="jk" value="P"/><span>Perempuan</span><br/>

      </>

        );
    }
}

export default Radio;