import React, { Component } from 'react';
import "./style.css"
import {Redirect} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() {
        const { username, password} = this.state

        if(this.props.statusLogin){
            return <Redirect to="/form"/>
        }
        console.log(this.props.statusLogin);
        return (

            <>
            <div id="wrapper">  
            <div id="header">
              <p className="judul">FORM LOGIN<br/>
				PT PARAMADAKSA TEKNOLOGI NUSANTARA<br/></p>
            </div>
            <div id="tengah">
            <input type="text" className="input2" placeholder="Masukan Username" name="username" onChange={this.setValue}/>
            <input type="password" className="input2" placeholder="Masukan Password" name="password" onChange={this.setValue}/>
            <br/>
            <button type="button" onClick={() =>{this.props.doLogin({username, password})} } className="button2">Login</button>
                </div>
                </div>
             </>

        );
    }
}

export default Login;