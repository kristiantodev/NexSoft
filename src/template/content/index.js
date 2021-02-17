import React, { Component } from 'react';
import logo from './biodata.JPG';
import album from './album.JPG';
import foto from './foto.JPG';
import { Input } from "../../component/";
import { Button } from "../../component/";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            email : "",
            city : "",
            company : ""
        }
 
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    render() {

        console.log("Link Gambar : ", this.props.linkGambar)

        if(!this.props.loading) {
            console.log(!this.props.loading)
            return <h1>Loading...</h1>
        } else {
            console.log(this.props.loading)
            if("name" in this.props.peopleEdit){
                this.setState({
                name: this.props.peopleEdit.name,
                email : this.props.peopleEdit.email,
                city : this.props.peopleEdit.address.city,
                company : this.props.peopleEdit.company.name
                })
                this.props.reset();
            }
            const { name, email, city, company } = this.state
        return (

            <>
            <div id="form">
              <div id="header">
                <img src={logo} className="img" height={75} alt="Logo" />
              </div>
              <div id="tengah">   
                <Input type="text" placeholder="Masukan Nama" name="name" onChange={this.setValue} value={name}/>
                <Input type="email" placeholder="Masukan Email" name="email" onChange={this.setValue} value={email}/>
                <Input type="text" placeholder="Masukan City" name="city" onChange={this.setValue} value={city}/>
                <Input type="text" placeholder="Masukan Nama Perusahaan" name="company" onChange={this.setValue} value={company}/>
                <Button className="button" onClick={() => this.props.save({ name, email, city, company })}>Simpan</Button>
              </div>
            </div>

            <div id="album">
              <div id="header">
                <img src={album} className="img" height={75} alt="Logo" />
              </div>
              <div id="tengah">   
              <table>
                <thead>
                  <tr>
                  <th>ID User</th>
                  <th>ID Album</th>
                   <th>Judul ALbum</th>
                   <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                              this.props.myAlbums.map((a, index) => {
                                  return (
            <tr key={index}>
                <td align="center">{a.userId}</td>
                 <td>{a.id}</td>
                <td>{a.title}</td>
                <td>
                     <button onClick={() =>{this.props.getFilterFoto(a.id)} }> Detail Foto </button>
                 </td>
                </tr>                
                                    
                                  )
                              })
                          }
                </tbody>
              </table>
              </div>
            </div>
            
            <div id="tabel">
              <div id="header">
                <img src={logo} height={75} alt="Logo" />
              </div>
              <table>
                <thead>
                  <tr>
                  <th>ID</th>
                  <th>Nama</th>
                   <th>Email</th>
                  <th>City</th>
                   <th>Company</th>
                   <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                              this.props.users.map((user, index) => {
                                  return (
            <tr key={index}>
                <td align="center">{user.id}</td>
                 <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
                 <td>
                     <button style={{ backgroundColor : "#DC143C" }} onClick={() =>{this.props.hapusPeople(index)} }> Hapus</button>
                     <button onClick={() =>{this.props.getEdit(index)} }> Ubah </button>
                     <button onClick={() =>{this.props.getAlbum(user.id)} }> Album </button>
                 </td>
                </tr>                
                                    
                                  )
                              })
                          }
                </tbody>
              </table>
            </div>


            <div id="foto">
              <div id="header">
                <img src={foto} height={75} alt="Logo" />
              </div>
              <table>
                <thead>
                  <tr>
                  <th>ID Album</th>
                  <th>ID Foto</th>
                   <th>Judul</th>
                   <th>Foto</th>
                   <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                              this.props.myPhotos.map((foto, index) => {
                                  return (
            <tr key={index}>
                <td align="center">{foto.albumId}</td>
                 <td>{foto.id}</td>
                <td>{foto.title}</td>
                <td><img src={foto.url} height={50} alt="Foto dari API" /></td>
                 <td>
                     <button onClick={() =>{this.props.getFoto(index)} }> Lihat Foto </button>
                 </td>
                </tr>                
                                    
                                  )
                              })
                          }
                </tbody>
              </table>
            </div>

            <div id="showFoto">
               <center> 
                   <h2>Foto Person : </h2>
                    <img src={this.props.linkGambar} height={250} alt="Foto dari API" />
            </center>
            </div>
            
          
          </>


        );
    }
}
}

export default Content;