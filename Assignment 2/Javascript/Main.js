let selectedUser;

// if (localStorage.length <= 0) {
//     localStorage.setItem("User_1", "Brendan#O'connor#sed.eu@outlook.ca#venenatis");
//     localStorage.setItem("User_2", "Jessamine#Wynn#et.magnis.dis@google.edu#elementum");
//     localStorage.setItem("User_3", "Callie#Huber#risus@outlook.net#Donec");
//     localStorage.setItem("User_4", "Regina#Sykes#sed.sapien.nunc@icloud.couk#ligula");
//     localStorage.setItem("User_5", "Adena#Lawson#at@icloud.couk#arcu");
//     localStorage.setItem("User_6", "Otto#Sawyer#eget@hotmail.org#Nam");
//     localStorage.setItem("User_7", "Scarlet#Hyde#amet.consectetuer@outlook.net#pede");
// }

//shows current users
window.onload = function(){
    let values;

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        values = localStorage.getItem(key).split("#");
        if (key.includes("User")) {
            // Dynamically creates a div
            const container = document.getElementById("Container");

            const Userdiv = document.createElement('div');
            const btnEdit = document.createElement('button');
            const btnDelete = document.createElement('button');
            
            Userdiv.id = key;        
            Userdiv.innerHTML = ` User: ${values[3]} <br>`;     
            Userdiv.innerHTML += ` Name: ${values[0]} ${values[1]} <br>`;
            Userdiv.innerHTML += `Email: ${values[2]}<br>`;
            Userdiv.innerHTML += `<br>`;
            Userdiv.classList.add("User-detail"); // THIS CAN BE THE CLASS NAME TO STYLE AS NEEDED

            container.appendChild(Userdiv.cloneNode(true));
                        
            btnEdit.innerHTML='Edit';
            btnDelete.innerHTML='Delete';
            
            btnEdit.classList.add("btn-RemoveEdit");
            btnDelete.classList.add("btn-RemoveEdit");

            const newdiv = document.getElementById(Userdiv.id);

            newdiv.appendChild(btnEdit.cloneNode(true));
            newdiv.appendChild(btnDelete.cloneNode(true));
            
            btnEdit.addEventListener("click",EditUser);
            btnDelete.addEventListener("click",RemoveUser);
            // Creates onclick event on newly created div
            

        }
    }
}

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

//creates user upon added user
function CreateUser(name,surname,username,email,key){
    const container = document.getElementById("Container");

    const div = document.createElement('div');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    div.id = key;        

    div.innerHTML = ` User: ${username} <br>`;     
    div.innerHTML += ` Name: ${name} ${surname} <br>`;
    div.innerHTML += `Email: ${email}<br>`;
    div.innerHTML += `<br>`;
    div.classList.add("User-detail"); // THIS CAN BE THE CLASS NAME TO STYLE AS NEEDED

    container.appendChild(div.cloneNode(true));
                
    button1.innerHTML='Edit';
    button2.innerHTML='Delete';
    
    button1.classList.add("btn-RemoveEdit");
    button2.classList.add("btn-RemoveEdit");
    const newdiv = document.getElementById(div.id);
    newdiv.appendChild(button1.cloneNode(true));
    
    newdiv.appendChild(button2.cloneNode(true));
}

const btnadd = document.querySelector(".btn");
const Usercontents = document.querySelector(".new");

btnadd.addEventListener("click",AddUser); 

function AddUser(){
    let unique = true;
    let values;

    try{
        // We have the ID's of the input objects now we convert them to that object's values.
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;

        // Tests if the username is unique before adding.
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            values = localStorage.getItem(key).split("#");
            // The last value in our string separated by "#" is the username so we see if that already exists.
            if ((values[3] == username) && (key.includes("User"))) {
                unique = false;
            }
        }

        if (unique) {
            // localstorage can only store 1 value for each record, so we have to get creative in order to store multiple values. We separate each value with a "#".
            localStorage.setItem(`User_${localStorage.length}`, `${name}#${surname}#${email}#${username}`);
            CreateUser(name,surname,username,email,localStorage.length);
            alert("successfully added");
        }
        else{
            alert("The username already exists");
        }
    }
    catch{
        alert("Something went wrong");
    }
}

// Removes a user from localstorage.
function RemoveUser(User){// for now it is the userID (in format: User_num), but I can search for the userID if I have the username.
    try{
        localStorage.removeItem(selectedUser);
        User.remove();
        alert(`User successfully removed`);
    }
    catch{
        alert("Something went wrong");
    }
}

// Edits a user.
function EditUser(name, surname, email, username){
    let unique = true;

    try{
        name = document.getElementById(name).value;
        surname = document.getElementById(surname).value;
        email = document.getElementById(email).value;
        username = document.getElementById(username).value;
        // Makes username a blank value so we can test for duplicates easier.
        let dummy = localStorage.getItem(selectedUser);
        localStorage.setItem(selectedUser, "");

        // Tests if the username is unique before adding.
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            values = localStorage.getItem(key).split("#");
            // The last value in our string separated by "#" is the username so we see if that already exists.
            if ((values[3] == username) && (key.includes("User"))) {
                unique = false;
            }
        }

        if (unique) {
            localStorage.setItem(selectedUser, `${name}#${surname}#${email}#${username}`);
            alert(`User successfully changed`);
        }
        else{
            localStorage.setItem(selectedUser, dummy);
            alert(`The username already exists`);
        }
    }
    catch{
        alert("Something went wrong");
    }
}

