import React, { Component } from 'react';
import "./style.css"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
               
           }
    }

    render() {
        return (
          <>
         <select id="jenisPencarian" className="inputSearch">
                             <option value="nama">Cari Berdasarkan Nama</option>
                             <option value="alamat">Cari Berdasarkan Alamat</option>
                             <option value="hobi">Cari Berdasarkan Hobi</option>
                  </select>
                  <input type="text" className="inputSearch" placeholder="Masukan Kata Kunci Pencarian" id="kataKunci" size="70"/>
          </>

        );
    }
}

export default Search;