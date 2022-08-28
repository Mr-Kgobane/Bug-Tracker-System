
// popup form
function open() {
document.querySelector("#popup").addEventListener("click",function(){
    document.querySelector(".Add").classList.add("active");
});
}
//close popup form
function close(){
document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".Add").classList.remove("active");
});
}

open();
close();

/* let id = 0;
let _name = document.getElementById("name").value;
let _surname = document.getElementById("surnme").value;
let _username = document.getElementById("username").value;
let _password = document.getElementById("password").value;
let _email= document.getElementById("email").value;

class User {
    constructor( name, surname, username, password, email) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.email = email;
    }

}

let users = new User(id,_name,_surname,_username,_password,_email);
users.id = ++id;

alert('added user:',users.username); */

const btnadd = document.querySelector(".btn");
const Usercontents = document.querySelector(".new");
//let i = 0, percent =5;
btnadd.addEventListener("click",AddUser);
function AddUser(){

    // Dynamically creates a div
    const newdiv = document.createElement('div');
    console.log("add");
    newdiv.classList.add("User-detail");
    Usercontents.appendChild(newdiv);

/*     div.id = users.id;
    for (let i = 0; i < users.length; i++) {
        div.innerHTML = users[i] + '\n';
    }
    div.className = 'user-detail';
    div.styl.position = "absolute";
    div.style= 'top: ${percent}%;';
    div.style.left = "105%";
    div.style.marginBottom = "10px";
 

    i++; */
}

