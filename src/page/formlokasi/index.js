import React, { Component } from 'react';

import { RowInput } from "../../component"

class Formlokasi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hewan : "",
            lokasi : "",
            biaya : "",
            update : false
        }
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() {
        if("hewan" in this.props.lokasiEdit){
            this.setState({
            hewan : this.props.lokasiEdit.hewan,
            lokasi : this.props.lokasiEdit.lokasi,
            biaya : this.props.lokasiEdit.biaya
                
            })
this.props.resetLokasi();
        }
        const { hewan, lokasi, biaya} = this.state
        return (
            <div>
            <center><h2>FORM LOKASI PENJAGALAN</h2></center>
                <RowInput label="Hewan" type="text" name="hewan" onChange={this.setValue} value={hewan}/>
                 <RowInput label="Lokasi" type="text" name="lokasi" onChange={this.setValue} value={lokasi} />
                  <RowInput label="Biaya" type="number" name="biaya" onChange={this.setValue} value={biaya} />
                <div>
                    <button className="button" onClick={() => this.props.saveLokasi({ hewan, lokasi, biaya})}>Simpan</button>
                </div>
            </div>
        );
    }
}

export default Formlokasi;