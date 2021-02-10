import React, { Component } from 'react';
import "./style.css";


class Isitabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
               
           }
    }

    render() {
        return (
          <>
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
      <tr>
        <td>1</td>
       <td>Kristianto</td>
       <td>Cirebon, 11 November 1998</td>
       <td>22 Tahun</td>
       <td>L</td>
       <td>Bersepeda</td>
       <td>Islam</td>
       <td>Tangerang</td>
       <td>
           <button style={{ backgroundColor : "#DC143C" }}>Hapus</button>
           <button> Ubah </button>
       </td>
      </tr>

      <tr>
        <td>2</td>
       <td>Malvin</td>
       <td>Cirebon, 10 Agustus 2000</td>
       <td>20 Tahun</td>
       <td>L</td>
       <td>Bersepeda</td>
       <td>Islam</td>
       <td>Cirebon</td>
       <td>
           <button style={{ backgroundColor : "#DC143C" }}>Hapus</button>
           <button> Ubah </button>
       </td>
      </tr>
            
        </tbody>
     </table>
          </>

        );
    }
}

export default Isitabel;