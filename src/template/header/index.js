import React, { Component } from 'react';
import "./style.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="header">Aplikasi Penjagalan Hewan</div>
        );
    }
}

export default Header;