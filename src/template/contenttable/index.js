import React, { Component } from 'react';
import "./style.css"
import logo from './img.png';
import { Search } from "../../component/tabel"
import { Paging } from "../../component/tabel"

class ContentTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { changePage } = this.props
        return (

           <div id="tabel">
            <div id="header">
             <img src={logo} height="75" alt="Logo"/>
            </div>

            <Search></Search>
            
            <table>
                <thead>
      <tr>
        <th width="30">No.</th>
        <th>Nama</th>
        <th>TTL</th>
        <th>Umur</th>
        <th>JK</th>
        <th>Hobby</th>
        <th>Agama</th>
        <th>Alamat</th>
        <th>Action</th>
      </tr>
      </thead>

      <tbody>
      
            {
                    this.props.people.map((person, index) => {
                        return (
                            <>

<tr key={index}>
        <td>{index+1}</td>
       <td>{person.nama}</td>
       <td>{person.tempat}, {person.ttl}</td>
       <td>{person.umur} Tahun</td>
       <td>{person.jk}</td>
       <td>{person.hobby.join(", ")}</td>
       <td>{person.agama}</td>
       <td>{person.alamat}</td>
       <td>
           <button style={{ backgroundColor : "#DC143C" }} onClick={() =>{this.props.hapusPeople(index)} }> Hapus</button>
           <button onClick={() =>{this.props.getEdit(index)} }> Rubah </button>
       </td>
      </tr>
                            
                          
                            </>
                        )
                    })
                }
            </tbody>
            </table>
            <Paging></Paging>
       
</div>

        );
    }
}

export default ContentTable;