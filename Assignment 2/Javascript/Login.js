function validate(){
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;

    if(username === "admin" && password==="user"){
        alert("login successfully");
        window.close("./Login.html");
        window.open("./Home.html");
        
        return false;
    }
    else{
        alert("login failed");
    }
}