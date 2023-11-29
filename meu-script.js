var url_string = window.location;
var url = new URL(url_string);

var name_usr = url.searchParams.get("nome");
var email_usr = url.searchParams.get("email");

document.getElementById("nome").textContent = name_usr;
document.getElementById("email").textContent = email_usr;
