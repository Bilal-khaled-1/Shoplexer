var nam = document.getElementById("name");
var sub = document.getElementById("sub");
var pass = document.getElementById("pass");
var warn_1 = document.getElementById("one")
var warn_2 = document.getElementById("two")

function sure() {
    if (nam.value == "") {
        warn_1.innerHTML = "Enter name"
    }else{
        warn_1.innerHTML = ""
    }
    if (pass.value == "") {
        warn_2.innerHTML = "Enter phone_number"
    }else{
        warn_2.innerHTML = ""
    }
    if (nam.value && pass.value != "") {
        window.location.href = "/Html/Main.html"
    }
}
