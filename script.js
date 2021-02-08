var personId = 1;
const hasil = document.getElementById('isi');
const button = document.getElementById('buttonSave');
let tmp = document.getElementById('tmp');
let ttl = document.getElementById('ttl');
let nama = document.getElementById('nama');
let agama = document.getElementById('agama');
let alamat = document.getElementById('alamat');
var jk = document.getElementsByName('jk');
const hobby = document.querySelectorAll('.hobby');
const pencarianData= document.querySelector('#kataKunci');
var dataCari = document.querySelector('#jenisPencarian');
let people = [];
var peopleList = [];
var currentPage = 1;
var numberPerPage = 4;
var numberOfPages = Math.ceil((people.length)/numberPerPage);

dataDummy();
tampilData();


function aturInput(){

    if (button.innerHTML === "Simpan") {

    if (alamat.value.length > 0 && nama.value.length > 0 && ttl.value.length >0 && tmp.value.length > 0 && agama.value != "") {
        inputData();
    }else{
        alert("Data harus diisi secara lengkap !!");
    }

}else{
    if (alamat.value.length > 0 && nama.value.length > 0 && ttl.value.length >0 && tmp.value.length > 0 && agama.value != "") {
        editData(button.getAttribute("data-type"));
    }else{
        alert("Data harus diisi secara lengkap !!");
    }
    
}

}

function inputData() {

    var date = ttl.value;
    var today = new Date();
	var birthday = new Date(date);
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

            
        for(i = 0; i < jk.length; i++) { 
            if(jk[i].checked) 
            var jkPilih = jk[i].value; 
        }
        
        let hobbyArray = [];
        hobby.forEach(element => {
            if(element.checked == true){
                hobbyArray.push(element.value)
            }
        })

    let person = {
        id: personId,
        nama: nama.value,
        tempat:tmp.value,
        ttl : ttl.value,
        jk : jkPilih,
        hobby : hobbyArray,
        agama : agama.value,
        alamat : alamat.value,
        umur : age
    };

    people.push(person);
    personId++;

    tampilData();
    clearForm();
    
}

function showData() {
    hasil.innerHTML = '';
    console.log(people);
    peopleList.forEach(person => {
        hasil.innerHTML += ` 
        <tr>
            <td> ${person.id} </td>
            <td> ${person.nama} </td>
            <td> ${person.tempat}, ${person.ttl} </td>
            <td> ${person.umur} Tahun</td>
            <td> ${person.jk}</td>
            <td> ${person.hobby}</td>
            <td> ${person.agama}</td>
            <td> ${person.alamat} </td>
            <td>
            <button type="button" onclick="deleteClicked(${person.id})">Delete</button>
            <button type="button" onclick="editClick(${person.id})">Edit</button>
            </td>
        <tr>    
        `
    });
}

function deleteClicked(id) {
    const person = people.find(function(person){
        return person.id === id
    })

    if(confirm(`Apakah anda yakin ingin menghapus data ${person.nama}`)){
        people = people.filter(function(person){
            return person.id != id
        })
    }
    tampilData();
}

function editClick(id){

	const person = people.findIndex(person =>{
		return person.id === id
	})

	nama.value = people[person].nama;
    tmp.value = people[person].tempat;
    ttl.value = people[person].ttl;
    alamat.value = people[person].alamat;
    agama.value = people[person].agama;

     for(var i = 0; i < jk.length; i++){
        if(jk[i].value == people[person].jk){
            jk[i].checked = true;
        }
    }

    let arrayHob = people[person].hobby;
    arrayHob.forEach(element => {
        hobby.forEach(el => {
            if(el.value == element){
                el.checked = true;
            }
        });
    });

	button.innerHTML = "Update";
	button.setAttribute("data-type", person);
}

function editData(id) {

    var date = ttl.value;
    var today = new Date();
    var birthday = new Date(date);
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

            
        for(i = 0; i < jk.length; i++) { 
            if(jk[i].checked) 
            var jkPilih = jk[i].value; 
        }
        
        let hobbyEdit=[];
        hobby.forEach(element => {
            if(element.checked == true){
                hobbyEdit.push(element.value)
            }
        })

    let person = {
        id: people[id].id,
        nama: nama.value,
        tempat:tmp.value,
        ttl : ttl.value,
        jk : jkPilih,
        hobby : hobbyEdit,
        agama : agama.value,
        alamat : alamat.value,
        umur : age
    };

    people.splice(id, 1, person);
    personId++;

    tampilData();
    clearForm();

    button.innerHTML ="Simpan";
    button.removeAttribute("data-type");
    
}

function dataDummy(){
    for(let i=0; i<10;i++){
    let person = {
        id: personId,
        nama: "Kristianto"+i,
        tempat:"Cirebon",
        ttl : "1998-11-11",
        jk : "L",
        hobby : ["Bersepeda"],
        agama : "Islam",
        alamat :"Jl. Otista",
        umur : "22"
    };

    people.push(person);
    personId++;

    }
}

function clearForm(){
    ttl.value="";
    tmp.value="";
    nama.value="";
    agama.value="--Pilih Agama--";
    alamat.value="";
  
        for(i = 0; i < jk.length; i++) { 
            jk[i].checked = false;
        }

        hobby.forEach(element => {
           element.checked = false;
        })
       
}

pencarianData.addEventListener("keyup", (el) => {
    let keyword = el.target.value
    if (dataCari.value == "nama") {
        if (keyword == "") {
            tampilData();
        }else{
            peopleList = people.filter((item) => {
                return item.nama == keyword;
            });

            showData();
        }
    }else if(dataCari.value == "alamat"){
        if (keyword == "") {
            tampilData();
        }else{
            peopleList = people.filter((item) => {
                return item.alamat == keyword;
            });

            showData();
        }
    }else{
        if (keyword == "") {
            tampilData();
        }else{
            peopleList = people.filter((item) => {
                return item.hobby == keyword;
            });
            showData();
        }
    }
});

let searchData = (person) => {
    hasil.innerHTML = "";
    if (person.length > 0) {
        for (var i = 0; i < person.length; i++) {
            hasil.innerHTML +=`
            <tr>
            <td>${person[i].id}</td>
            <td> ${person[i].nama} </td>
            <td> ${person[i].tempat},${person[i].ttl} </td>
            <td> ${person[i].umur} Tahun </td>
            <td> ${person[i].jk}</td>
            <td> ${person[i].hobby}</td>
            <td> ${person[i].agama}</td>
            <td> ${person[i].alamat} </td>
            <td>
            <button type="button" onclick="deleteClicked(${person[i].id})">Delete</button>
            <button type="button" onclick="editClick(${person[i].id})">Edit</button>
            </td>
        <tr>    `;
        }
    }else{
        hasil.innerHTML = `
        <tr>
            <td style="text-align: center" colspan="9">Data tidak ditemukan...</td>
        </tr>`;
    }
}


function tampilData() {
var begin = ((currentPage - 1) * numberPerPage);
var end = begin + numberPerPage;

peopleList = people.slice(begin, end);
showData();
check();
}

function check() {
document.getElementById("first").disabled = currentPage == 1 ? true : false;
document.getElementById("next").disabled = currentPage == Math.ceil((people.length)/numberPerPage) ? true : false;
document.getElementById("previous").disabled = currentPage == 1 ? true : false;
document.getElementById("last").disabled = currentPage == Math.ceil((people.length)/numberPerPage)  ? true : false;
}

function nextPage() {
currentPage += 1;
tampilData();
}

function previousPage() {
currentPage -= 1;
tampilData();
}

function firstPage() {
currentPage = 1;
tampilData();
}

function lastPage() {
currentPage = Math.ceil((people.length)/numberPerPage);
tampilData();
}