import React, { Component } from 'react';


class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
<br/>
<center><h2>DAFTAR NAMA CUSTOMER</h2></center>
            <table border="1"  width="50%" align="center">

                <thead>
                    <tr bgcolor="#008CBA">
                        <th><font color="white">No</font></th>
                        <th><font color="white">Nama Customer</font></th>
                        <th><font color="white">Alamat Customer</font></th>
                        <th><font color="white">Action</font></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.customers.map((my, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{my.nama}</td>
                                    <td>{my.alamat}</td>
                                    <td>
                                       <button onClick={() =>{this.props.editCustomer(idx)} }>Edit</button>
                                       <button style={{ backgroundColor : "#DC143C" }} onClick={() =>{this.props.hapusCustomer(idx)} }>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </>
        );
    }
}

export default Customer;