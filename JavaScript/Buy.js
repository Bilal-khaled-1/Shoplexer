var nam = document.getElementById("name");
var sub = document.getElementById("sub");
var pass = document.getElementById("pass");
var paste = document.getElementById("paste");
var warn_1 = document.getElementById("one")
var warn_2 = document.getElementById("two")
var server_id = "service_9f1tudg";
var templte_id = "template_dcwl4tj";


function send_email() {
    function sure() {
        if (nam.value == "") {
            warn_1.innerHTML = "Enter name"
        }else{
            warn_1.innerHTML = ""
        }
        if (paste.value == "") {
            warn_2.innerHTML = "Paste the order"
        }else{
            warn_2.innerHTML = ""
        }
        if (nam.value && paste.value != "") {
            window.location.href = "/Html/Main.html"
        }
    }
    sure()
    var params = {
        name: nam.value,
        message: paste.value,
        comment: pass.value,
    };
    emailjs.send(server_id, templte_id,param).then((res) =>{
            document.getElementById("name").value = "";
            document.getElementById("paste").value = "";
            document.getElementById("pass").value = "";
            console.log(res);
    })
    
    .catch((err) => console.log(err));
}
