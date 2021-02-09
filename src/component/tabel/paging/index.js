import React, { Component } from 'react';
import "./style.css"

class Paging extends Component {
    constructor(props) {
        super(props);
        this.state = {
               
           }
    }

    render() {
        return (
          <>
        
        <input type="button" className="buttonPaging" id="first" value="First Page" />
        <input type="button" className="buttonPaging" id="previous" value="< Back" />
        <input type="button" className="buttonPaging" id="next" value="Next >" />
        <input type="button" className="buttonPaging" id="last" value="Last Page" />

          </>

        );
    }
}

export default Paging;