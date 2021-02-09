import React, { Component } from 'react';
import "./style.css"

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="footer">
    &copy; 2021 - Kristianto (Java Bootcamp)
    
  </div>
        );
    }
}

export default Footer;