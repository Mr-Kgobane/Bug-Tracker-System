// These global variables determine what project/user/bug is currently selected (By storing the key of that value in localstorage) when editing.
// STILL NEEDS FUNCTION TO DETERMINE SELECTED USER
let selectedUser = "User_1";
// STILL NEEDS FUNCTION TO DETERMINE SELECTED BUG
let selectedBug = "";
// STILL NEEDS FUNCTION TO DETERMINE SELECTED PROJECT
let selectedProject = "";




//User Edits:
//===================================================================================================================================================================
//===================================================================================================================================================================
// Adds a new user to localstorage.
function AddUser(name, surname, email, username){//IMPORTANT: Input the ID's of your objects you created as input. I can get the values if you give me their ID's
    let unique = true;
    let values;

    try{
        // We have the ID's of the input objects now we convert them to that object's values.
        name = document.getElementById(name).value;
        surname = document.getElementById(surname).value;
        email = document.getElementById(email).value;
        username = document.getElementById(username).value;

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
function RemoveUser(){// for now it is the userID (in format: User_num), but I can search for the userID if I have the username.
    try{
        localStorage.removeItem(selectedUser);
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
//===================================================================================================================================================================
//===================================================================================================================================================================


//Project Edits:
//===================================================================================================================================================================
//===================================================================================================================================================================
// Adds a new project to localstorage.
function AddProject(name){//IMPORTANT: Input the ID's of your objects you created as input. I can get the values if you give me their ID's
    let unique = true;
    let value;

    try{
        // We have the ID's of the input objects now we convert them to that object's values.
        name = document.getElementById(name).value;

        // Tests if the project name is unique before adding.
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            value = localStorage.getItem(key);
            if ((value == name) && (key.includes("Project"))) {
                unique = false;
            }
        }

        if (unique) {
            // localstorage can only store 1 value for each record, so we have to get creative in order to store multiple values. We separate each value with a "#".
            localStorage.setItem(`Project_${localStorage.length}`, name);
            alert("successfully added");
        }
        else{
            alert("That project name already exists");
        }
    }
    catch{
        alert("Something went wrong");
    }
}

// Removes a project from localstorage.
function RemoveProject(){
    try{
        localStorage.removeItem(selectedProject);
        alert(`Project successfully removed`);
    }
    catch{
        alert("Something went wrong");
    }
}

// Edits a project.
function EditProject(name){
    let unique = true;

    try{
        name = document.getElementById(name).value;

        // Makes a blonk values so we can test easier for duplicates before we replace.
        let dummy = localStorage.getItem(selectedProject);
        localStorage.setItem(selectedUser, ``);
        // Tests if the project name is unique before adding.
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            value = localStorage.getItem(key);
            if ((value == name) && (key.includes("Project"))) {
                unique = false;
            }
        }

        if (unique) {
            localStorage.setItem(selectedUser, name);
            alert(`Project successfully changed`);
        }
        else{
            localStorage.setItem(selectedUser, dummy);
            alert(`That project name already exists`);
        }
    }
    catch{
        alert("Something went wrong");
    }
}
//===================================================================================================================================================================
//===================================================================================================================================================================

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ↓ IGNORE THIS FOR NOW ↓ 

function DisplayItems(){
    let Items = new Array();
    let line = "";
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        line = `${line} \n ${key}: ${localStorage.getItem(key)}`;
        // Items[i] = [key, localStorage.getItem(key)];
    }

    alert(line);
}

// function AddProject(name){
//     localStorage.setItem(`Project_${localStorage.length}`, `${name}`);
// }

function ClearStorage(){
    localStorage.clear();
    alert("cleared");
}