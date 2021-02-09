import React, { Component } from 'react';
import "./style.css"
import logo from './img.png';
import { Search } from "../../component/tabel"
import { Isitabel } from "../../component/tabel"
import { Paging } from "../../component/tabel"

class ContentTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

           <div id="tabel">
            <div id="header">
             <img src={logo} height="75" alt="Logo"/>
            </div>

            <Search></Search>
            <Isitabel></Isitabel>
            <Paging></Paging>
       
</div>

        );
    }
}

export default ContentTable;