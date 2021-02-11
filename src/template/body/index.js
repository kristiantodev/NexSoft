import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import { Home, Register, About, Formtransaksi, Login, Hewan, Transaksi, Formlokasi, Lokasi, Formcustomer, Customer } from "../../page"

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                 {username:"Ayam"},
                 {username:"Kerbau"}
            ],
            lokasiJagal:[
              {
                hewan : "Ayam",
                lokasi : "Bandung",
                biaya : 10000
              },
              {
                hewan : "Ayam",
                lokasi : "Jakarta",
                biaya : 15000
              },
              {
                hewan : "Kambing",
                lokasi : "Bandung",
                biaya : 200000
              }
            ],
            customers:[
              {
                nama : "Kristianto",
                alamat : "Cirebon"
              },
               {
                nama : "Malvin",
                alamat : "Cirebon Kota"
              },
               {
                nama : "Dewi",
                alamat : "Cirebon Kab"
              }
            ],
            transaksi:[
              {
                nama : "Kristianto",
                hewan : "Ayam",
                lokasi : "Bandung",
                biaya : 10000,
                jumlah : 2,
                total : 20000
              },
               {
                nama : "Malvin",
                hewan : "Kambing",
                lokasi : "Jakarta",
                biaya : 250000,
                jumlah : 2,
                total : 500000
              },
               {
                nama : "Dewi",
                hewan : "Sapi",
                lokasi : "Jakarta",
                biaya : 1500000,
                jumlah : 2,
                total : 3000000
              }
            ],
            statusLogin: false,
            act: 0,
            index: "",
            hewanEdit : {},
            customerEdit : {},
            lokasiEdit : {},
            transaksiEdit :{}
        }
    }

    save = user => {
        const { username} = user
        let newUsers = this.state.users
if (this.state.act === 0) {
        if (username == "") {
           alert("Nama Hewan Harus Diisi!!");
        }else{
            newUsers.push({
            username
        })
            this.setState({
            users: newUsers
        })
        alert("Data Berhasil Disimpan!!");
        }

    }else{
        let index = this.state.index;
      newUsers[index].username = username;
      this.setState({
        users: newUsers,
        act: 0
      })
      alert('Data Berhasil DiUpdate..');
    }
        
    }

     saveLokasi = lokasiOb => {
        const { hewan, lokasi, biaya} = lokasiOb
        console.log(hewan, lokasi, biaya)
        let newLokasi = this.state.lokasiJagal
if (this.state.act === 0) {
        if (hewan == "" || lokasi == "" || biaya=="") {
           alert("Data Harus Diisi!!");
        }else{
            newLokasi.push({
            hewan, lokasi, biaya
        })
        this.setState({
            lokasiJagal : newLokasi
        })
        alert("Data Berhasil Disimpan!!");
        }
}else{
    let index = this.state.index;
      newLokasi[index].hewan = hewan;
      newLokasi[index].lokasi = lokasi;
      newLokasi[index].biaya = biaya;
      this.setState({
        lokasiJagal: newLokasi,
        act: 0
      })
      alert('Data Berhasil DiUpdate..');
}
        
    }

    saveCustomer = customer => {
        const { nama, alamat} = customer
        console.log(nama, alamat)
        let newCus = this.state.customers
if (this.state.act === 0) {
        if (nama == "" || alamat == "") {
           alert("Data Harus Diisi!!");
        }else{

            newCus.push({
            nama, alamat
        })
        this.setState({
            customers : newCus
        })
        alert("Data Berhasil Disimpan!!");

        }

    }else{

      let index = this.state.index;
      newCus[index].nama = nama;
      newCus[index].alamat = alamat;

      this.setState({
        customers: newCus,
        act: 0
      })
      alert('Data Berhasil DiUpdate..');
    }
    
    }

    saveTransaksi = transaksiObj => {
        const { nama, hewan, lokasi, jumlah} = transaksiObj
        let newTransaksi = this.state.transaksi
        var biaya;
        var total;

        if (hewan == "Ayam" && lokasi == "Bandung") {
            biaya=10000;
        }else if(hewan == "Ayam" && lokasi == "Jakarta"){
            biaya=15000;
        }else if(hewan == "Ayam" && lokasi == "Tangerang"){
            biaya=12000;
        }else if(hewan == "Sapi" && lokasi == "Bandung"){
            biaya=1000000;
        }else if(hewan == "Sapi" && lokasi == "Jakarta"){
            biaya=1500000;
        }else if(hewan == "Sapi" && lokasi == "Tangerang"){
            biaya=1200000;
        }else if(hewan == "Kambing" && lokasi == "Bandung"){
            biaya=200000;
        }else if(hewan == "Kambing" && lokasi == "Jakarta"){
            biaya=250000;
        }else if(hewan == "Kambing" && lokasi == "Tangerang"){
            biaya=220000;
        }

        total = biaya*jumlah;

if (this.state.act === 0) {
        if (nama == "" || hewan == "" || lokasi == "" | jumlah == "") {
           alert("Data Harus Diisi!!");
        }else{

            newTransaksi.push({
            nama, hewan, lokasi, jumlah, "biaya" : biaya, "total" : total
        })
        this.setState({
            transaksi : newTransaksi
        })
        alert("Data Berhasil Disimpan!!");

        }

    }else{

      let index = this.state.index;
      newTransaksi[index].nama = nama;
      newTransaksi[index].hewan = hewan;
      newTransaksi[index].lokasi = lokasi;
      newTransaksi[index].jumlah = jumlah;
      newTransaksi[index].biaya = biaya;
      newTransaksi[index].total = total;

      this.setState({
        transaksi : newTransaksi,
        act: 0
      })
      alert('Data Berhasil DiUpdate..');
    }
    
    }

hapusHewan = (indexHapus) => {
  if(window.confirm("Apakah anda yakin ingin menghapus data ini ?")){
    
     var arrayHewan = this.state.users;
     if (indexHapus !== -1) {
        arrayHewan.splice(indexHapus, 1);
        this.setState({users: arrayHewan});
     }else{
        alert("Gagal dihapus!!");
     }

  }

}

hapusLokasi = (indexHapus) => {
  if(window.confirm("Apakah anda yakin ingin menghapus data ini ?")){
    
     var arrayLokasi = this.state.lokasiJagal;
     if (indexHapus !== -1) {
        arrayLokasi.splice(indexHapus, 1);
        this.setState({lokasiJagal: arrayLokasi});
     }else{
        alert("Gagal dihapus!!");
     }

  }

}

hapusCustomer = (indexHapus) => {
  if(window.confirm("Apakah anda yakin ingin menghapus data ini ?")){
    
     var arrayCus = this.state.customers;
     if (indexHapus !== -1) {
        arrayCus.splice(indexHapus, 1);
        this.setState({customers: arrayCus});
     }else{
        alert("Gagal dihapus!!");
     }

  }

}

hapusTransaksi = (indexHapus) => {
  if(window.confirm("Apakah anda yakin ingin menghapus data ini ?")){
    
     var arrayT = this.state.transaksi;
     if (indexHapus !== -1) {
        arrayT.splice(indexHapus, 1);
        this.setState({transaksi: arrayT});
     }else{
        alert("Gagal dihapus!!");
     }

  }

}

editHewan = (index) => {
  this.setState({
    act: 1,
    index: index
  });

  const hewanEditData=this.state.users[index];
  console.log(hewanEditData)

  this.setState({
    hewanEdit: hewanEditData
  })

  alert("Silahkan pindah klik form Hewan untuk edit data!!");

}

reset = ()=> {
  this.setState({
    hewanEdit :{}
  })
}

editLokasi = (index) => {
  this.setState({
    act: 1,
    index: index
  });

  const lokasidata=this.state.lokasiJagal[index];
  console.log(lokasidata)

  this.setState({
    lokasiEdit : lokasidata
  })

  alert("Silahkan pindah kehalaman form Lokasi untuk edit data!!");

}

resetLokasi = ()=> {
  this.setState({
    lokasiEdit :{}
  })
}

editCustomer = (index) => {
  this.setState({
    act: 1,
    index: index
  });

  const cusdata=this.state.customers[index];
  console.log(cusdata)

  this.setState({
    customerEdit : cusdata
  })

  alert("Silahkan pindah kehalaman form Customer untuk edit data!!");

}

resetCustomer = ()=> {
  this.setState({
    customerEdit :{}
  })
}

editTransaksi = (index) => {
  this.setState({
    act: 1,
    index: index
  });

  const transaksiCari =this.state.transaksi[index];

  this.setState({
    transaksiEdit : transaksiCari
  })

  alert("Silahkan pindah kehalaman form Transaksi untuk edit data!!");

}

resetTransaksi = ()=> {
  this.setState({
    transaksiEdit :{}
  })
}

    doLogin = () => {
        this.setState(prevState => ({
            statusLogin: !prevState.statusLogin
        }))
    }

    render() {
 
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about">
                    <About hapusHewan={this.hapusHewan} editHewan={this.editHewan} users={this.state.users} />
                </Route>

                <Route path="/lokasi">
                    <Lokasi hapusLokasi={this.hapusLokasi} editLokasi={this.editLokasi} lokasiJagal={this.state.lokasiJagal} />
                </Route>

                <Route path="/customer">
                    <Customer hapusCustomer={this.hapusCustomer} editCustomer={this.editCustomer} customers={this.state.customers} />
                </Route>

                <Route path="/transaksi">
                    <Transaksi transaksi={this.state.transaksi} hapusTransaksi={this.hapusTransaksi} editTransaksi={this.editTransaksi}/>
                </Route>

                <Route path="/hewan">
                    <Hewan save={this.save} hewanEdit={this.state.hewanEdit} reset={this.reset}/>
                </Route>

                <Route path="/formlokasi">
                    <Formlokasi saveLokasi={this.saveLokasi} lokasiEdit={this.state.lokasiEdit} resetLokasi={this.resetLokasi}/>
                </Route>

                <Route path="/formtransaksi">
                    <Formtransaksi saveTransaksi={this.saveTransaksi} transaksiEdit={this.state.transaksiEdit} resetTransaksi={this.resetTransaksi}/>
                </Route>

                <Route path="/formcustomer">
                    <Formcustomer saveCustomer={this.saveCustomer} customerEdit={this.state.customerEdit} resetCustomer={this.resetCustomer} />
                </Route>

                <Route path="/login">
                    <Login statusLogin={this.state.statusLogin} doLogin={this.doLogin} />
                </Route>
            </Switch>
        )
    }
}

export default Body;