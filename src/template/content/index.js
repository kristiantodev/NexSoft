import React, { Component } from 'react';
import "./style.css"
import logo from './img.png';
import { Input } from "../../component/form";
import { Check } from "../../component/form";
import { Textarea} from "../../component/form";
import { Radio} from "../../component/form";
import { Redirect } from 'react-router-dom';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "",
            tempat: "",
            ttl: "",
            jk: "",
            hobby:[],
            agama:"",
            alamat : "",
            update : false
        }
 
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    setHobby = el => {
        // console.log(el.target.value);
        // console.log(el.target.checked);

        if(el.target.checked === true) {
            this.state.hobby.push(el.target.value);
        } else {
            const newHobby = this.state.hobby.filter((value, index) => {
                return value !== el.target.value;
            });

            this.state.hobby = newHobby;
        }
    }

    resetForm = () => { 
        document.getElementById("form-biodata").reset();
      }

    render() {

        if(!this.props.statusLogin){
            return <Redirect to="/login"/>
        }

        console.log(this.props.statusLogin);

        if("nama" in this.props.peopleEdit){
            this.setState({
            nama: this.props.peopleEdit.nama,
            tempat: this.props.peopleEdit.tempat,
            ttl: this.props.peopleEdit.ttl,
            jk: this.props.peopleEdit.jk,
            hobby: this.props.peopleEdit.hobby,
            agama:this.props.peopleEdit.agama,
            alamat : this.props.peopleEdit.alamat
                
            })
            this.props.reset();
        }

        console.log(this.props.peopleEdit);
        const { nama, tempat, ttl, jk, hobby, agama, alamat } = this.state
        return (

  <div id="form">
            <div id="header">
             <img src={logo} className="img" height="75" alt="Logo"/>
            </div>
    
    <div id="tengah">
 
             <Input type="text" name="nama" onChange={this.setValue} placeholder="Masukan Nama" value={nama}/>
             <Input type="text" name="tempat" onChange={this.setValue} placeholder="Masukan Tempat lahir" value={tempat}/>
             <Input type="date" name="ttl" onChange={this.setValue} placeholder="Masukan Tanggal lahir" value={ttl}/>
             <br></br><span className="radio">Gender :</span>
             <Radio type="radio" checked={jk==="L"?"checked":""} name='jk' value="L" onChange={this.setValue}/>Laki-laki
             <Radio type="radio" checked={jk==="P"?"checked":""} name='jk' value="P" onChange={this.setValue}/>Perempuan<br></br>
             <span className="radio">Hobby :</span>
             <Check type="checkbox" name="hobby" onClick={this.setHobby} value="Berenang"/>Berenang
             <Check type="checkbox" name="hobby" onClick={this.setHobby} value="Jogging"/>Jogging
             <Check type="checkbox" name="hobby" onClick={this.setHobby} value="Bersepeda"/>Bersepeda
             <Check type="checkbox" name="hobby" onClick={this.setHobby} value="Futsal"/>Futsal
             <select name="agama" className="input" value={agama} onChange={this.setValue}>
                   <option value="">-- Pilih Agama --</option>
                   <option value="Islam">Islam</option>
                   <option value="Kristen">Kristen</option>
                   <option value="Hindu">Hindu</option>
                   <option value="Budha">Budha</option>
            </select>
            <Textarea name="alamat" placeholder="Masukan Alamat" onChange={this.setValue} value={alamat}/>

             <button className="button" onClick={() => this.props.save({ nama, tempat, ttl, jk, hobby, agama, alamat })}>Simpan</button>     
  </div>  
  </div>


        );
    }
}

export default Content;