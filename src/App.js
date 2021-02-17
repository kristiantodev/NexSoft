import React, { Component } from 'react';
import "./App.css"
import { Header, Footer, Content} from "./template"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        users : [],
        albums : [],
        photos : [],
        myAlbums : [],
        myPhotos : [],
        loading : false,
        index : "",
        peopleEdit : {},
        linkGambar : ""
    }

  }

  componentDidMount() {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/albums'),
      fetch('https://jsonplaceholder.typicode.com/photos')
  ])
        .then(([response, response2, response3]) => Promise.all([response.json(), response2.json(), response3.json()]))
        .then(([json, json2, json3]) => this.setState({
          users: json,
          albums: json2,
          photos: json3,
          loading: false
        }))
        .catch(()=>{
          alert("Gagal mengambil Data !!")
        })
        .finally(()=>{
          this.setState({loading:true})
        })
}

hapusPeople = (indexHapus) => {
  if(window.confirm("Apakah anda yakin ingin menghapus data ini ?")){
    
     var arrayPeople = this.state.users;
     if (indexHapus !== -1) {
        arrayPeople.splice(indexHapus, 1);
        this.setState({users: arrayPeople});
     }else{
        alert("Gagal dihapus!!");
     }

  }

}

save = (person) => {
  const { name, email, city, company} = person
  let newPeople = this.state.users

  if (name == "" || email=="" || city=="" ||company == "") {

    alert("Data tidak boleh kosong")
    
  }else{
    let index = this.state.index;
    newPeople[index].name = name;
    newPeople[index].email = email;
    newPeople[index].address.city = city;
    newPeople[index].company.name = company;

    this.setState({
      users: newPeople
    })
    alert('Data Berhasil DiUpdate..');
  }
  
}

getEdit = (index) => {
  this.setState({
    index: index
  });

  const personEdit=this.state.users[index];
  this.setState({
    peopleEdit: personEdit
  })

}

getFoto = (index) => {
  this.setState({
    index: index
  });

  const url =this.state.photos[index].url;

  this.setState({
    linkGambar : url
  })

}

getAlbum = (index) => {
  this.setState({
    index: index
  });

  const albumFilter = this.state.albums.filter(x => x.userId === index);

  this.setState({
    myAlbums : albumFilter
  })

}

getFilterFoto = (index) => {
  this.setState({
    index: index
  });

  const fotoFilter = this.state.photos.filter(x => x.albumId === index);

  this.setState({
    myPhotos : fotoFilter
  })

}

reset = ()=> {
  this.setState({
    peopleEdit :{}
  })
}


  render() {
    return (
   <>
   <Content 
   users={this.state.users}
   myAlbums={this.state.myAlbums}
   photos={this.state.photos} 
   myPhotos={this.state.myPhotos}
   loading={this.state.loading}
   hapusPeople={this.hapusPeople}
   getEdit={this.getEdit}
   peopleEdit={this.state.peopleEdit}
   reset={this.reset}
   save={this.save}
   linkGambar={this.state.linkGambar}
   getFoto={this.getFoto}
   getAlbum={this.getAlbum}
   getFilterFoto={this.getFilterFoto}
    />
  
   </>
    );
  }
}

export default App;

