import React, { Component } from 'react';


class Transaksi extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
<br/>
<center><h2>DAFTAR TRANSAKSI PENJAGALAN HEWAN</h2></center>
            <table border="1"  width="80%" align="center">

                <thead>
                    <tr bgcolor="#008CBA">
                        <th><font color="white">No</font></th>
                        <th><font color="white">Nama Customer</font></th>
                        <th><font color="white">Hewan</font></th>
                        <th><font color="white">Lokasi Penjagalan</font></th>
                        <th><font color="white">Biaya Jagal</font></th>
                        <th><font color="white">Jumlah Hewan</font></th>
                        <th><font color="white">Total Bayar Jagal</font></th>
                        <th><font color="white">Action</font></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.transaksi.map((my, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{my.nama}</td>
                                    <td>{my.hewan}</td>
                                    <td>{my.lokasi}</td>
                                    <td>Rp. {my.biaya}</td>
                                    <td>{my.jumlah} Hewan</td>
                                    <td>Rp. {my.total}</td>
                                    <td>
                                       <button onClick={() =>{this.props.editTransaksi(idx)} }>Edit</button>
                                       <button style={{ backgroundColor : "#DC143C" }} onClick={() =>{this.props.hapusTransaksi(idx)} }>Delete</button>
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

export default Transaksi;