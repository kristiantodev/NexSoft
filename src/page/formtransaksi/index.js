import React, { Component } from 'react';

import { RowInput } from "../../component"

class Formtransaksi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama : "",
            hewan : "",
            lokasi : "",
            jumlah : "",
            update : false
        }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() {
        if("hewan" in this.props.transaksiEdit){
            this.setState({
            nama : this.props.transaksiEdit.nama,
            hewan : this.props.transaksiEdit.hewan,
            lokasi : this.props.transaksiEdit.lokasi,
            jumlah : this.props.transaksiEdit.jumlah
                
            })
        this.props.resetTransaksi();
        }

        const { nama, hewan, lokasi, jumlah} = this.state
        return (
            <div>
            <center><h2>FORM TRANSAKSI PENJAGALAN</h2></center>
                <RowInput label="Nama" type="text" name="nama" onChange={this.setValue} value={nama}/>
                
                Hewan
                <select name="hewan" className="input" value={hewan} onChange={this.setValue}>
                   <option value="">-- Pilih Hewan --</option>
                   <option value="Ayam">Ayam</option>
                   <option value="Kambing">Kambing</option>
                   <option value="Sapi">Sapi</option>
               </select>
               Lokasi
               <select name="lokasi" className="input" value={lokasi} onChange={this.setValue}>
                   <option value="">-- Pilih Lokasi --</option>
                   <option value="Bandung">Bandung</option>
                   <option value="Jakarta">Jakarta</option>
                   <option value="Tangerang">Tangerang</option>
               </select>
                 
                  <RowInput label="Jumlah" type="number" name="jumlah" onChange={this.setValue} value={jumlah} />
                <div>
                    <button className="button" onClick={() => this.props.saveTransaksi({ nama, hewan, lokasi, jumlah})}>Simpan</button>
                </div>
            </div>
        );
    }
}

export default Formtransaksi;