import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import logo from './pic.JPG';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log("statuslogin:", this.props.statusLogin);
        if (this.props.statusLogin)
            return <Redirect to="/" />

        return (
            <>
            <p className="judul"><h2><center>FORM LOGIN<br/>
                APLIKASI PENJAGALAN HEWAN</center></h2></p>
                <center><img src={logo} height="175" alt="Logo"/><br/>
                <input type="text" className="inputLogin" placeholder="Masukan Username" name="username"/>
            <input type="password" className="inputLogin" placeholder="Masukan Password" name="password"/></center>
            <button className="button" onClick={this.props.doLogin}>Login</button>
            </>
        );
    }
}

export default Login;