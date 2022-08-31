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

    localStorage.setItem("Bug_1", "vitae, orci. Phasellus dapibus#non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper#porta#2022/02/22#orci#ready#low");
    localStorage.setItem("Bug_2", "condimentu#dolor sit amet, consectetuer adipiscing#natoque#2023/04/17#nunc, #backlog#medium");
    localStorage.setItem("Bug_3", "Cum sociis natoque penatibus#massa. Quisque porttitor eros nec#et#2022/09/07#porttitor#ready#high");
    localStorage.setItem("Bug_4", "feugiat nec,#eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum#lobortis#2021/09/29#cubilia#ready#low");
    localStorage.setItem("Bug_5", "cursus luctus,#Sed auctor odio a purus. Duis#scelerisque#2022/12/27#semper#progress#medium");
    localStorage.setItem("Bug_6", "vitae velit#dictum mi, ac mattis velit justo#ornare,#2022/01/19#mus.#finish#high");
    localStorage.setItem("Bug_7", "dignissim pharetra. Nam ac nulla.#eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et#dis#2021/11/11#magna#ready#low");
    localStorage.setItem("Bug_8", "hendrerit consectetuer,#lorem, eget mollis lectus pede et#tempus#2021/11/02#ac#progress#medium");
    localStorage.setItem("Bug_9", "neque venenatis#sociosqu ad litora torquent per conubia nostra, per inceptos#magna.#2023/02/11#orci#ready#high");
    localStorage.setItem("Bug_10", "commodo auctor#venenatis lacus. Etiam#imperdiet#2023/08/16#dapibus#ready#low");
    localStorage.setItem("Bug_11", "dictum sapien.#pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at#vel,#2022/06/07#tellus#backlog#medium");
    localStorage.setItem("Bug_12", "mi. Aliquam gravida mauris#viverra. Maecenas iaculis aliquet diam. Sed#lorem.#2022/12/17#arcu#ready#high");
    localStorage.setItem("Bug_13", "dictum placerat, augue. Sed#a mi fringilla mi lacinia mattis.#varius#2022/07/20#nulla.#ready#low");
    localStorage.setItem("Bug_14", "a, facilisis#facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec#feugiat.#2022/06/07#libero#backlog#medium");
    localStorage.setItem("Bug_15", "Praesent eu nulla at#Fusce fermentum fermentum arcu.#malesuada#2023/01/04#cursus#backlog#high");
    localStorage.setItem("Bug_16", "eleifend non,#Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat#eget#2022/01/11#non,#progress#low");
    localStorage.setItem("Bug_17", "vel nisl. Quisque fringilla#Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc#elit,#2021/12/24#per#ready#medium");
    localStorage.setItem("Bug_18", "Donec#pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod#odio#2022/12/20#penatibus#progress#high");
    localStorage.setItem("Bug_19", "dignissim lacus. Aliquam rutrum#Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices#magna.#2022/05/03#lobortis#finish#low");
    localStorage.setItem("Bug_20", "aptent taciti#Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing#lobortis#2023/05/01#enim.#ready#medium");
}
//===================================================================================================================================================================

//Load the dynamic objects according to what is in localstorage:
window.onload = LoadBugs;
function LoadBugs(){
    // Container Information
    const backlog = document.getElementById("backlog_scroll");
    const ready = document.getElementById("ready_scroll");
    const progress = document.getElementById("progress_scroll");
    const finish = document.getElementById("finish_scroll");

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
            <p class="severity">${values[6]}</p>
            <p class="platform">${values[4]}</p>         
            <p class="duration">${values[3]}</p>
            <button class="view-more" onclick="openEditForm('${key}')">-view more-</button>`;
            
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
}

// --------------------- Creates Pupup Window --------------------//
function openEditForm(key){
    document.getElementById("editPopup").style.display = "block";
    selectedBug = key;
    summaryItems = localStorage.getItem(key).split("#");
    document.getElementById("editPopup").innerHTML = `<form class="formContainer">  
                                                        <button type="button" class="btn_close" onclick="closeEditForm()">Close</button>              
                                                        <h2 class="summary">Summary: ${summaryItems[0]}</h2>
                                                        <p class="description"><b>Description:</b></p>
                                                        <div class = "description-content">${summaryItems[1]}</div>
                                                        <p class="severity"><b>Severity:</b> ${summaryItems[6]}</p>
                                                        <p class="platform"><b>Project:</b> ${summaryItems[4]}</p>         
                                                        <p class="duration"><b>Date made:</b> ${summaryItems[3]}</p>
                                                        <p class="user-reported"><b>User Assigned:</b> ${summaryItems[2]}</p>  
                                                        <button type="button" class="btn_remove" onclick="closeEditForm()">Close</button>
                                                        <button type="button" class="btn_edit" onclick="closeEditForm()">Close</button>     
                                                       </form>`;

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

function closeEditForm(){
    document.getElementById("editPopup").style.display = "none";
    selectedBug = "";
    
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
