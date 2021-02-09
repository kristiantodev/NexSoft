import React, { Component } from 'react';
import "./style.css"
import logo from './img.png';
import { Input } from "../../component/form"
import { Inputtmp } from "../../component/form"
import { Date } from "../../component/form"
import { Radio } from "../../component/form"
import { Checkbox } from "../../component/form"
import { Select } from "../../component/form"
import { Texarea } from "../../component/form"
import { Submit } from "../../component/form"

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
               
           }
    }

   

    render() {
        return (

  <div id="form">
            <div id="header">
             <img src={logo} className="img" height="75" alt="Logo"/>
            </div>
    
    <div id="tengah">

             <Input type="text" name="nama"></Input>
             <Inputtmp type="text" name="tmp"></Inputtmp>
             <Date type="date" name="ttl"></Date>

      <span className="radio">Gender :</span>

             <Radio></Radio>

      <span className="radio">Hobby :</span>

             <Checkbox></Checkbox>

             <Select></Select>

             <Texarea></Texarea>

             <Submit></Submit>  
      
  </div>  
  </div>

        );
    }
}

export default Content;