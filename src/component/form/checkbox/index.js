import React, { Component } from 'react';
import "./style.css"

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
               
           }
    }

    render() {
        return (
          <>

      <input type="checkbox" name='hobby' className="hobby" id="berenang" value="Berenang"/><span>Berenang</span>
      <input type="checkbox" name="hobby" className="hobby" id="jogging" value="Jogging"/><span>Jogging</span>
      <input type="checkbox" name="hobby" className="hobby" id="bersepeda" value="Bersepeda"/><span>Bersepeda</span>
      <input type="checkbox" name="hobby" className="hobby" id="futsal" value="Futsal"/><span>Futsal</span>

      </>

        );
    }
}

export default Checkbox;