import React, { Component } from 'react';
import { Header, Footer, Content, ContentTable } from "./template"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./page/login"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        people: [
          {
            nama: "Kristianto",
            tempat: "Cirebon",
            ttl: "1998-11-11",
            umur:"22",
            jk : "L",
            hobby:["Berenang", "Futsal"],
            agama:"Islam",
            alamat:"Cirebon"
          },
          {
            nama: "Malvin",
            tempat: "Cirebon",
            ttl: "2000-07-04",
            umur:"20",
            jk : "L",
            hobby:["Berenang"],
            agama:"Islam",
            alamat:"Cirebon"
          },
          {
            nama: "Dewi",
            tempat: "Cirebon",
            ttl: "2003-10-10",
            umur:"17",
            jk : "P",
            hobby:["Berenang"],
            agama:"Islam",
            alamat:"Cirebon"
          }
        ],
        peopleEdit:{},
        act: 0,
        index: "",
        statusLogin: false,
        userLogin:{
          username:"kris",
          password:"123"
        }
    }
}

setValue = el => {
    this.setState({
        [el.target.name]: el.target.value
    })
}

save = (person) => {
    const { nama, tempat, ttl, jk, hobby, agama, alamat } = person
    let newPeople = this.state.people
    
    var today = new Date();
		var birthday = new Date(ttl);
		var year = 0;
		if (today.getMonth() < birthday.getMonth()) {
			year = 1;
		} else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
			year = 1;
		}
		var age = today.getFullYear() - birthday.getFullYear() - year;
 
		if(age < 0){
			age = 0;
		}

    if (this.state.act === 0) {

    if (nama == "" || tempat == "" || ttl == "" || jk == "" || hobby == "" || agama=="" || alamat == "") {
      alert("Data Harus Diisi secara lengkap !!");

    }else{

      newPeople.push({
          nama, tempat,
          "ttl": ttl, "umur" : age, jk, hobby, agama, alamat
      })
  
      this.setState({
          people: newPeople
      })

    }

  }else{
      let index = this.state.index;
      newPeople[index].nama = nama;
      newPeople[index].tempat = tempat;
      newPeople[index].ttl = ttl;
      newPeople[index].umur = age;
      newPeople[index].jk = jk;
      newPeople[index].hobby = hobby;
      newPeople[index].agama = agama;
      newPeople[index].alamat = alamat;
      this.setState({
        people: newPeople,
        act: 0
      })
      alert('Data Berhasil DiUpdate..');
  }
    
}

hapusPeople = (indexHapus) => {
  if(window.confirm("Apakah anda yakin ingin menghapus data ini ?")){
    
     var arrayPeople = this.state.people;
     if (indexHapus !== -1) {
        arrayPeople.splice(indexHapus, 1);
        this.setState({people: arrayPeople});
     }else{
        alert("Gagal dihapus!!");
     }

  }

}

getEdit = (index) => {
  this.setState({
    act: 1,
    index: index
  });
  const personEdit=this.state.people[index];

  this.setState({
    peopleEdit: personEdit
  })

}

reset = ()=> {
  this.setState({
    peopleEdit :{}
  })
}

doLogin=(login) =>{
  const { username, password } = login

  if (username == this.state.userLogin.username && password == this.state.userLogin.password) {
    this.setState({
      statusLogin: true
    })

  }else{
    alert("Username atau Password salah!!");
  }

 
}

  render() {
    return (
      <>
      <BrowserRouter>
      <Header />
      <Login doLogin={this.doLogin} statusLogin={this.state.statusLogin}></Login>
      <Switch>
      <Route path="/login">
        <Login doLogin={this.doLogin} statusLogin={this.state.statusLogin}></Login>
      </Route>
      <Route path="/form">
        <Content statusLogin={this.state.statusLogin} save={this.save} peopleEdit={this.state.peopleEdit} reset={this.reset}/>
        <ContentTable hapusPeople={this.hapusPeople} getEdit={this.getEdit} people={this.state.people} />
        </Route>
        </Switch>
        <Footer/>
     </BrowserRouter>
      </>
    );
  }
}

export default App;