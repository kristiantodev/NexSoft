import React, { Component } from 'react';
import logo from './pic.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <center>
            <br/>
 <img src={logo} className="img" height="375" alt="Logo"/>
            </center>
        );
    }
}

export default Home;