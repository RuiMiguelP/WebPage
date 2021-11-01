function changeBackground() {
    if (document.body.style.backgroundColor == "black"){
        document.body.style.backgroundColor = "white";
        document.getElementById("texto666").style.color = "black";
        sessionStorage.setItem("fundoPreto", "false");
    } else {
        document.body.style.backgroundColor = "black";
        document.getElementById("texto666").style.color = "white";
        sessionStorage.setItem("fundoPreto", "true");
    }
}

function getName() {
    return sessionStorage.getItem("userSession");
}

function setSession() {
    // Gets input value
    var name = document.getElementById("textSession").value;

    // Saves data to retrieve later
    sessionStorage.setItem("userSession", name);

    var form = document.getElementById("formSession");
    form.style.display = "none";

    var name = getName();

    document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcome!";
}

function checkSessionHome() {
    if (sessionStorage.getItem("userSession") !== null) {
        document.getElementById("formSession").style.visibility = "hidden";
        var name = getName();
        document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcome!";
    }
}

function checkSession() {
    if (sessionStorage.getItem("userSession") !== null) {
        var name = getName();
        document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcome!";
    }
}

function checkBg() {
    
    if (sessionStorage.getItem("fundoPreto")=="true")
        {
            
            document.body.style.backgroundColor = "black";
            document.getElementById("texto666").style.color = "white";
            
        }
        
}