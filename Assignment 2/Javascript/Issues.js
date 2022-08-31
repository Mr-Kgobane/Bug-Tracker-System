let selectedBug = "";
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

//Load the dynamic objects according to what is in localstorage:
window.onload = LoadBugs;
function LoadBugs(){
    // To change the height of the container dynamically we must have the containers as variables.
    const backlog = document.getElementById("backlog");
    const ready = document.getElementById("ready");
    const progress = document.getElementById("progress");
    const finish = document.getElementById("finish");
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.includes("Bug")) {
            let values = localStorage.getItem(key).split("#");
            // Dynamically creates a div
            const div = document.createElement('div');
            div.id = key;
            div.className = "issue";   
            div.innerHTML = `<h2 class="summary">${values[0]}</h2>
            <p class="user-reported">${values[2]}</p>
            <p class="severity">${values[7]}</p>
            <p class="platform">${values[4]}</p>         
            <p class="duration">${values[3]}</p>
            <button class="view-more" onclick="openViewForm('${key}')">-view more-</button>`;
            
            let keyValues = localStorage.getItem(key);
            //console.log(keyValues);
            if (keyValues.includes('#backlog')){
                backlog.appendChild(div.cloneNode(true));
            }
            else if (keyValues.includes('#ready')){
                ready.appendChild(div.cloneNode(true));       
            }
            else if (keyValues.includes('#progress')){
                progress.appendChild(div.cloneNode(true));        
            }
            else if (keyValues.includes('#finish')){
                finish.appendChild(div.cloneNode(true)); 
            }      
        }
    }

    // Makes containers large enough to fit content.
    backlog.style.height = "fit-content";
    backlog.style.padding = "5px";
    ready.style.height = "fit-content";
    ready.style.padding = "5px";
    progress.style.height = "fit-content";
    progress.style.padding = "5px";
    finish.style.height = "fit-content";
    finish.style.padding = "5px";
}

// --------------------- Creates Pupup Window --------------------//
function DisableForm(){
    // Disables all the buttons on the main page.
    let addButtons = document.getElementsByClassName("BTN_Issue_Add");
    for (let i = 0; i < addButtons.length; i++) {
        addButtons[i].setAttribute("disabled", "");
        addButtons[i].setAttribute("style", "pointer-events: none");
    }
    let viewButtons = document.getElementsByClassName("view-more");
    for (let i = 0; i < viewButtons.length; i++) {
        viewButtons[i].setAttribute("disabled", "");
        viewButtons[i].setAttribute("style", "pointer-events: none");
    }     
}

function EnableForm(){
    // Enables all the buttons on the main page.
    let addButtons = document.getElementsByClassName("BTN_Issue_Add");
    for (let i = 0; i < addButtons.length; i++) {
        addButtons[i].removeAttribute("disabled");
        addButtons[i].removeAttribute("style");
    }
    let viewButtons = document.getElementsByClassName("view-more");
    for (let i = 0; i < viewButtons.length; i++) {
        viewButtons[i].removeAttribute("disabled");
        viewButtons[i].removeAttribute("style");
    } 
}

function openViewForm(key){
    document.getElementById("view-popup").style.display = "block";
    selectedBug = key;
    summaryItems = localStorage.getItem(key).split("#");
    document.getElementById("view-popup").innerHTML = `<form class="formContainer">  
                                                        <button type="button" class="btn-close" onclick="closeViewForm()">Close</button>              
                                                        <h2 class="summary">Summary: ${summaryItems[0]}</h2>
                                                        <p class="description"><b>Description:</b></p>
                                                        <div class = "description-content">${summaryItems[1]}</div>
                                                        <p class="severity"><b>Severity:</b> ${summaryItems[7]}</p> 
                                                        <p class="platform"><b>Project:</b> ${summaryItems[4]}</p>  
                                                        <p class="status"><b>Status:</b> ${summaryItems[6]}</p>        
                                                        <p class="duration"><b>Date made/changed:</b> ${summaryItems[3]}</p>
                                                        <p class="user-assigned"><b>User Assigned:</b> ${summaryItems[5]}</p>  
                                                        <p class="user-reported"><b>User Reported:</b> ${summaryItems[2]}</p>  
                                                        <button type="button" id="btn-edit" onclick="openEditForm()">Edit</button>  
                                                        <button type="button" id="btn-remove" onclick="RemoveBug()">Remove</button>   
                                                       </form>`;
    DisableForm();           
}

function closeViewForm(){
    document.getElementById("view-popup").style.display = "none";
    
    EnableForm();
}

function openEditForm(){
    closeViewForm();
    document.getElementById("edit-popup").style.display = "block";
    DisableForm();

    // Inserts the default values.
    let values = localStorage.getItem(selectedBug).split("#");
    document.getElementById("summary-input").value = `${values[0]}`;
    document.getElementById("description-input").value = `${values[1]}`;
    document.getElementById("severity-input").value = `${values[7]}`;

    document.getElementById("edit-status").style.display = "block";

    // Loads the inputs for the dropdown boxes dynamically according to what is in localstorage.
    LoadInputOptions();

    document.getElementById("user-input").value = `${values[5]}`;
    document.getElementById("status-input").value = `${values[6]}`;
    // We insert the current date as date submitted.
    var date = new Date();
	var current_date = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+ date.getDate();

    document.querySelector("#btn-submit").setAttribute("onclick", "EditBug('summary-input', 'description-input', '"+values[2]+"', '"+current_date+"', 'project-input', 'user-input', 'status-input', 'severity-input')");
}

function closeEditForm(){
    document.getElementById("edit-popup").style.display = "none";

    EnableForm();
}

function OpenAddForm(status){
    closeViewForm();
    document.getElementById("edit-popup").style.display = "block";
    DisableForm();

    // Inserts the default values.
    document.getElementById("summary-input").value = "";
    document.getElementById("description-input").value = "";

    document.getElementById("edit-status").style.display = "none";

    // Loads the inputs for the dropdown boxes dynamically according to what is in localstorage.
    LoadInputOptions();
    // We insert the current date as date submitted.
    var date = new Date();
	var current_date = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+ date.getDate();

    document.querySelector("#btn-submit").setAttribute("onclick", "AddBug('summary-input', 'description-input', 'Admin', '"+current_date+"', 'project-input', 'user-input', '"+status+"', 'severity-input')");
}

function LoadInputOptions(){
    // We have to determine the projects.
    // First we make a unique collection of all projects.
    let projects = new Set();
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.includes("Project")) {
            let item = localStorage.getItem(key);
            projects.add(item);
        }     
    }
    // Then we have to clear the old values in the select.
    let elem = document.getElementById("project-input");
    for (let i = elem.length - 1; i >= 0 ; i--) {
        elem.remove(i); 
    }
    // Then we loop through that collection and add them to our html.
    projects.forEach(element => {
        const option = document.createElement("option");
        option.id = `${element}`;
        option.value = `${element}`;
        option.innerHTML = `${element}`;
        elem.appendChild(option);
    });

    // Now we do relatively the same procedure for users.
    let users = new Set();
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.includes("User")) {
            let items = localStorage.getItem(key).split("#");
            users.add(items[3]);
        }     
    }
    elem = document.getElementById("user-input");
    for (let i = elem.length - 1; i >= 0 ; i--) {
        elem.remove(i); 
    }
    users.forEach(element => {
        const option = document.createElement("option");
        option.id = `${element}`;
        option.value = `${element}`;
        option.innerHTML = `${element}`;
        elem.appendChild(option);
    });
}
//===================================================================================================================================================================

//Bug Edits:
//===================================================================================================================================================================
//===================================================================================================================================================================
// Adds a new bug to localstorage.
function AddBug(summary, description, submittedBy, date, project, assignedTo, status, severity){
    summary = document.getElementById(summary).value;
    description = document.getElementById(description).value;
    project = document.getElementById(project).value;
    assignedTo = document.getElementById(assignedTo).value;
    severity = document.getElementById(severity).value;
    if (Validate(summary, description, submittedBy, date, project, assignedTo, status, severity)) {
        let line = `${summary}#${description}#${submittedBy}#${date}#${project}#${assignedTo}#${status}#${severity}`;
        localStorage.setItem(`Bug_${localStorage.length}`, line);
        location.reload();
    }
}

// Removes a bug from localstorage.
function RemoveBug(){// for now it is the BugID (in format: Bug_num).
    if(confirm("Are you sure you want to delete the current bug displayed below?")){
        localStorage.removeItem(selectedBug);
        location.reload();
    }
}

// Edits a bug.
function EditBug(summary, description, submittedBy, date, project, assignedTo, status, severity){
    let unique = true;

    summary = document.getElementById(summary).value;
    description = document.getElementById(description).value;
    project = document.getElementById(project).value;
    assignedTo = document.getElementById(assignedTo).value;
    status = document.getElementById(status).value;
    severity = document.getElementById(severity).value;
    if (Validate(summary, description, submittedBy, date, project, assignedTo, status, severity)) {
        let line = `${summary}#${description}#${submittedBy}#${date}#${project}#${assignedTo}#${status}#${severity}`;
        localStorage.setItem(selectedBug, line);
        location.reload();
    }
}

// Validates the input.
function Validate(summary, description, submittedBy, date, project, assignedTo, status, severity){
    if ((summary == "") || (description == "") || (submittedBy == "") || (date == "") || (project == "") || (assignedTo == "") || (status == "") || (severity == "")) {
        alert("Some fields still have to be filled in");
        return false;
    }
    else{
        return true;
    }
}
//===================================================================================================================================================================
//===================================================================================================================================================================
