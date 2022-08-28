// These global variables determine what project/user/bug is currently selected (By storing the key of that value in localstorage) when editing.
// STILL NEEDS FUNCTION TO DETERMINE SELECTED USER
let selectedUser = "User_1";
// STILL NEEDS FUNCTION TO DETERMINE SELECTED BUG
let selectedBug = "";
// STILL NEEDS FUNCTION TO DETERMINE SELECTED PROJECT
let selectedProject = "";

// Insert sample data:
//======================================================================================================================================================================
if (localStorage.length <= 0) {
    localStorage.setItem("User_1", "Brendan#O'connor#sed.eu@outlook.ca#venenatis");
    localStorage.setItem("User_2", "Jessamine#Wynn#et.magnis.dis@google.edu#elementum");
    localStorage.setItem("User_3", "Callie#Huber#risus@outlook.net#Donec");
    localStorage.setItem("User_4", "Regina#Sykes#sed.sapien.nunc@icloud.couk#ligula");
    localStorage.setItem("User_5", "Adena#Lawson#at@icloud.couk#arcu");
    localStorage.setItem("User_6", "Otto#Sawyer#eget@hotmail.org#Nam");
    localStorage.setItem("User_7", "Scarlet#Hyde#amet.consectetuer@outlook.net#pede");

    localStorage.setItem("Project_1", "Theta");
    localStorage.setItem("Project_2", "Iota");
    localStorage.setItem("Project_3", "Beta");
    localStorage.setItem("Project_4", "Alpha");
    localStorage.setItem("Project_5", "Omega");

    localStorage.setItem("Bug_1", "vitae, orci. Phasellus dapibus#non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper#porta#2022/02/22#orci#Ready");
    localStorage.setItem("Bug_2", "condimentu#dolor sit amet, consectetuer adipiscing#natoque#2023/04/17#nunc,#Backlog");
    localStorage.setItem("Bug_3", "Cum sociis natoque penatibus#massa. Quisque porttitor eros nec#et#2022/09/07#porttitor#Ready");
    localStorage.setItem("Bug_4", "feugiat nec,#eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum#lobortis#2021/09/29#cubilia#Ready");
    localStorage.setItem("Bug_5", "cursus luctus,#Sed auctor odio a purus. Duis#scelerisque#2022/12/27#semper#In progress");
    localStorage.setItem("Bug_6", "vitae velit#dictum mi, ac mattis velit justo#ornare,#2022/01/19#mus.#Done");
    localStorage.setItem("Bug_7", "dignissim pharetra. Nam ac nulla.#eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et#dis#2021/11/11#magna#Ready");
    localStorage.setItem("Bug_8", "hendrerit consectetuer,#lorem, eget mollis lectus pede et#tempus#2021/11/02#ac#In progress");
    localStorage.setItem("Bug_9", "neque venenatis#sociosqu ad litora torquent per conubia nostra, per inceptos#magna.#2023/02/11#orci#Ready");
    localStorage.setItem("Bug_10", "commodo auctor#venenatis lacus. Etiam#imperdiet#2023/08/16#dapibus#Ready");
    localStorage.setItem("Bug_11", "dictum sapien.#pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at#vel,#2022/06/07#tellus#Backlog");
    localStorage.setItem("Bug_12", "mi. Aliquam gravida mauris#viverra. Maecenas iaculis aliquet diam. Sed#lorem.#2022/12/17#arcu#Ready");
    localStorage.setItem("Bug_13", "dictum placerat, augue. Sed#a mi fringilla mi lacinia mattis.#varius#2022/07/20#nulla.#Ready");
    localStorage.setItem("Bug_14", "a, facilisis#facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec#feugiat.#2022/06/07#libero#Backlog");
    localStorage.setItem("Bug_15", "Praesent eu nulla at#Fusce fermentum fermentum arcu.#malesuada#2023/01/04#cursus#Backlog");
    localStorage.setItem("Bug_16", "eleifend non,#Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat#eget#2022/01/11#non,#In progress");
    localStorage.setItem("Bug_17", "vel nisl. Quisque fringilla#Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc#elit,#2021/12/24#per#Ready");
    localStorage.setItem("Bug_18", "Donec#pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod#odio#2022/12/20#penatibus#In progress");
    localStorage.setItem("Bug_19", "dignissim lacus. Aliquam rutrum#Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices#magna.#2022/05/03#lobortis#Done");
    localStorage.setItem("Bug_20", "aptent taciti#Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing#lobortis#2023/05/01#enim.#Ready");
}
//===================================================================================================================================================================

//Load the dynamic objects according to what is in localstorage:
//===================================================================================================================================================================
function LoadBugs(){
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.includes("Bug")) {
            // Dynamically creates a div
            var div = document.createElement('div');
            div.id = key;        
            div.innerHTML = `Hi there! ${key}`;
            div.className = `border-pad`;
        
            document.body.appendChild(div.cloneNode(true));
            // Creates onclick event on newly created div
            var element = document.getElementById(key);
            element.onclick = function(event) {
                alert(key);
            };
        }
    }
}

window.onload = function(){
    LoadBugs();
}
//===================================================================================================================================================================


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


//Bug Edits:
//===================================================================================================================================================================
//===================================================================================================================================================================
// Adds a new bug to localstorage.
function AddBug(summary, description, submittedBy, date, project, assignedTo, status){//IMPORTANT: Input the ID's of your objects you created as input. I can get the values if you give me their ID's
    let unique = true;
    let values;

    try{
        // We have the ID's of the input objects now we convert them to that object's values.
        summary = document.getElementById(summary).value;
        description = document.getElementById(description).value;
        submittedBy = document.getElementById(submittedBy).value;
        date = document.getElementById(date).value;
        // Still need to determine if project ID is given or project Name//////////////////////////////////////////////////////////////////////////////////////////////
        project = document.getElementById(project).value;
        assignedTo = document.getElementById(assignedTo).value;
        status = document.getElementById(status).value;

        // Tests if the summary is unique before adding.
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            values = localStorage.getItem(key).split("#");
            // The last value in our string separated by "#" is the summary so we see if that already exists to remove duplicates.
            if ((values[1] == summary) && (key.includes("Bug"))) {
                unique = false;
            }
        }

        if (unique) {
            // localstorage can only store 1 value for each record, so we have to get creative in order to store multiple values. We separate each value with a "#".
            localStorage.setItem(`Bug_${localStorage.length}`, `${summary}#${description}#${submittedBy}#${date}#${project}#${assignedTo}#${status}`);
            alert("successfully added");
        }
        else{
            alert("The bug summary is not unique");
        }
    }
    catch{
        alert("Something went wrong");
    }
}

// Removes a bug from localstorage.
function RemoveBug(){// for now it is the BugID (in format: Bug_num).
    try{
        localStorage.removeItem(selectedBug);
        alert(`User successfully removed`);
    }
    catch{
        alert("Something went wrong");
    }
}

// Edits a bug.
function EditBug(summary, description, submittedBy, date, project, assignedTo, status){
    let unique = true;

    try{
        // We have the ID's of the input objects now we convert them to that object's values.
        summary = document.getElementById(summary).value;
        description = document.getElementById(description).value;
        submittedBy = document.getElementById(submittedBy).value;
        date = document.getElementById(date).value;
        // Still need to determine if project ID is given or project Name//////////////////////////////////////////////////////////////////////////////////////////////
        project = document.getElementById(project).value;
        assignedTo = document.getElementById(assignedTo).value;
        status = document.getElementById(status).value;

        // Makes username a blank value so we can test for duplicates easier.
        let dummy = localStorage.getItem(selectedUser);
        localStorage.setItem(selectedUser, `${name}#${surname}#${email}#`);

        // Tests if the summary is unique before adding.
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            values = localStorage.getItem(key).split("#");
            // The last value in our string separated by "#" is the summary so we see if that already exists to remove duplicates.
            if ((values[1] == summary) && (key.includes("Bug"))) {
                unique = false;
            }
        }

        if (unique) {
            localStorage.setItem(selectedBug, `${summary}#${description}#${submittedBy}#${date}#${project}#${assignedTo}#${status}`);
            alert(`Bug successfully changed`);
        }
        else{
            localStorage.setItem(selectedBug, dummy);
            alert(`The bug summary already exists`);
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