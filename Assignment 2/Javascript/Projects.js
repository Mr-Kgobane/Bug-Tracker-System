let selectedProject = "";

// Insert sample data if none exist:
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

    localStorage.setItem("Bug_1", "vitae, orci. Phasellus dapibus#non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper#porta#2022/02/22#Theta#venenatis#ready#low");
    localStorage.setItem("Bug_2", "condimentu#dolor sit amet, consectetuer adipiscing#natoque#2023/04/17#Iota#elementum#backlog#medium");
    localStorage.setItem("Bug_3", "Cum sociis natoque penatibus#massa. Quisque porttitor eros nec#et#2022/09/07#Beta#Donec#ready#high");
    localStorage.setItem("Bug_4", "feugiat nec,#eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum#lobortis#2021/09/29#Alpha#ligula#ready#low");
    localStorage.setItem("Bug_5", "cursus luctus,#Sed auctor odio a purus. Duis#scelerisque#2022/12/27#Omega#arcu#progress#medium");
    localStorage.setItem("Bug_6", "vitae velit#dictum mi, ac mattis velit justo#ornare,#2022/01/19#Theta#Nam#finish#high");
    localStorage.setItem("Bug_7", "dignissim pharetra. Nam ac nulla.#eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et#dis#2021/11/11#Iota#pede#ready#low");
    localStorage.setItem("Bug_8", "hendrerit consectetuer,#lorem, eget mollis lectus pede et#tempus#2021/11/02#Beta#venenatis#progress#medium");
    localStorage.setItem("Bug_9", "neque venenatis#sociosqu ad litora torquent per conubia nostra, per inceptos#magna.#2023/02/11#Alpha#elementum#ready#high");
    localStorage.setItem("Bug_10", "commodo auctor#venenatis lacus. Etiam#imperdiet#2023/08/16#Omega#Donec#ready#low");
    localStorage.setItem("Bug_11", "dictum sapien.#pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at#vel,#2022/06/07#Theta#ligula#backlog#medium");
    localStorage.setItem("Bug_12", "mi. Aliquam gravida mauris#viverra. Maecenas iaculis aliquet diam. Sed#lorem.#2022/12/17#Iota#arcu#ready#high");
    localStorage.setItem("Bug_13", "dictum placerat, augue. Sed#a mi fringilla mi lacinia mattis.#varius#2022/07/20#Beta#Nam#ready#low");
    localStorage.setItem("Bug_14", "a, facilisis#facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec#feugiat.#2022/06/07#Alpha#pede#backlog#medium");
    localStorage.setItem("Bug_15", "Praesent eu nulla at#Fusce fermentum fermentum arcu.#malesuada#2023/01/04#Omega#venenatis#backlog#high");
    localStorage.setItem("Bug_16", "eleifend non,#Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat#eget#2022/01/11#Iota#elementum#progress#low");
    localStorage.setItem("Bug_17", "vel nisl. Quisque fringilla#Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc#elit,#2021/12/24#Beta#Donec#ready#medium");
    localStorage.setItem("Bug_18", "Donec#pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod#odio#2022/12/20#Alpha#ligula#progress#high");
    localStorage.setItem("Bug_19", "dignissim lacus. Aliquam rutrum#Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices#magna.#2022/05/03#Omega#arcu#finish#low");
    localStorage.setItem("Bug_20", "aptent taciti#Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing#lobortis#2023/05/01#Alpha#Nam#ready#medium");
}
//===================================================================================================================================================================

window.onload = loadProjects;

function loadProjects(){
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.includes("Project")) {
            let values = localStorage.getItem(key);
            // Dynamically creates a div
            const div = document.createElement('div');
            div.id = key;
            div.className = "Container";     
            div.innerHTML = `<div class="title">
                                 <h4 class="projectName">${values}</h4>
                             </div>
                             <div>
                                 <button type="button" class="btn-edit" onClick="OpenEditForm('${key}')">Rename Project</button>
                                 <button type="button" class="btn-remove" onClick="RemoveProject('${key}')">Delete Project</button>
                             </div>`; 
            document.getElementById("main").appendChild(div.cloneNode(true));    
        }
    }
}

function DisableForm(){
    // Disables all the buttons on the main page.
    let addButton = document.getElementById("add-project");
    addButton.setAttribute("disabled", "");
    addButton.setAttribute("style", "pointer-events: none");

    let editButtons = document.getElementsByClassName("btn-edit");
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].setAttribute("disabled", "");
        editButtons[i].setAttribute("style", "pointer-events: none");
    }  
    
    let deleteButtons = document.getElementsByClassName("btn-remove");
    for (let i = 0; i < editButtons.length; i++) {
        deleteButtons[i].setAttribute("disabled", "");
        deleteButtons[i].setAttribute("style", "pointer-events: none");
    }
}

function EnableForm(){
    // Enables all the buttons on the main page.
    let addButton = document.getElementById("add-project");
    addButton.removeAttribute("disabled");
    addButton.removeAttribute("style");

    let editButtons = document.getElementsByClassName("btn-edit");
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].removeAttribute("disabled", "");
        editButtons[i].removeAttribute("style");
    }  
    
    let deleteButtons = document.getElementsByClassName("btn-remove");
    for (let i = 0; i < editButtons.length; i++) {
        deleteButtons[i].removeAttribute("disabled");
        deleteButtons[i].removeAttribute("style");
    }
}

// This is for a popup menu to change project details.
function OpenAddForm(){
    selectedProject = "";
    document.getElementById("edit-popup").style.display = "block";
    document.querySelector(".btn-submit").setAttribute("onclick", "AddProject('project-name-input')");
    document.querySelector("#project-name-input").setAttribute("value", ``);
    DisableForm();
}

function OpenEditForm(key){
    selectedProject = key;
    document.getElementById("edit-popup").style.display = "block";
    document.querySelector(".btn-submit").setAttribute("onclick", "EditProject('project-name-input')");
    document.querySelector("#project-name-input").setAttribute("value", `${localStorage.getItem(key)}`);
    DisableForm();
}

function CloseForm(){
    document.getElementById("edit-popup").style.display = "none";
    EnableForm();
}
//Project Edits:
//===================================================================================================================================================================
// Removes a project.
function RemoveProject(key){
    if (confirm(`Are you sure you want to delete project: ${localStorage.getItem(key)}`)) {
        localStorage.removeItem(key);
        location.reload();
    }
}

// Edits a project.
function EditProject(name){
    let unique = true;
    name = document.getElementById(name).value;
    if (Validate(name)) {
        localStorage.setItem(selectedProject, name);
        location.reload();
    }
}

// Adds a new project to localstorage.
function AddProject(name){
    let unique = true;
    let value;
    // We have the ID's of the input objects now we convert them to that object's values.
    name = document.getElementById(name).value;
    if (Validate(name)) {
        localStorage.setItem(`Project_${localStorage.length}`, name);
        location.reload();
    }
}

// Validates the input.
function Validate(name){
    if (name == "") {
        alert("Some fields still have to be filled in");
        return false;
    }
    else{
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            value = localStorage.getItem(key);
            if ((key.includes("Project")) && (value == name) && (key != selectedProject)) {
                alert("The project name is not unique");
                return false;
            }
        }

        return true;
    }
}
//===================================================================================================================================================================
