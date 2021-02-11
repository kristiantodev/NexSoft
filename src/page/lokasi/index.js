import React, { Component } from 'react';


class Lokasi extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
<br/>
<center><h2>DAFTAR LOKASI PENJAGALAN</h2></center>
            <table border="1"  width="50%" align="center">

                <thead>
                    <tr bgcolor="#008CBA">
                        <th><font color="white">No</font></th>
                        <th><font color="white">Nama Hewan</font></th>
                        <th><font color="white">Lokasi Penjagalan</font></th>
                        <th><font color="white">Biaya</font></th>
                        <th><font color="white">Action</font></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.lokasiJagal.map((my, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{my.hewan}</td>
                                    <td>{my.lokasi}</td>
                                    <td>{my.biaya}</td>
                                    <td>
                                       <button onClick={() =>{this.props.editLokasi(idx)} }>Edit</button>
                                       <button style={{ backgroundColor : "#DC143C" }} onClick={() =>{this.props.hapusLokasi(idx)} }>Delete</button>
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

export default Lokasi;