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
    }}
