import React, { Component } from 'react';

import { RowInput } from "../../component"

class Formcustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama : "",
            alamat : "",
            update : false
        }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() {
        if("nama" in this.props.customerEdit){
            this.setState({
            nama : this.props.customerEdit.nama,
            alamat : this.props.customerEdit.alamat
                
            })

            this.props.resetCustomer();
        }
        const { nama, alamat} = this.state
        return (
            <div>
            <center><h2>FORM DATA CUSTOMER</h2></center>
                <RowInput label="Nama " type="text" name="nama" onChange={this.setValue} value={nama}/>
                 Alamat <textarea className="input" name="alamat" value={alamat} onChange={this.setValue}></textarea>
                <div>
                    <button className="button" onClick={() => this.props.saveCustomer({ nama, alamat})}>Simpan</button>
                </div>
            </div>
        );
    }
}

export default Formcustomer;