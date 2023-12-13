var url_string = window.location;
var url = new URL(url_string);

var name_usr = url.searchParams.get("nome");
var email_usr = url.searchParams.get("email");
var fone_usr = url.searchParams.get("fone");

var telefoneFormatado = fone_usr ? formatarTelefone(fone_usr) : "";

alert("Obrigado!!");

function formatarTelefone(telefone) {
  var regex = /^(\d{2})(\d{4,5})(\d{4})$/;
  var resultado = telefone.replace(regex, "($1) $2-$3");
  return resultado;
}

document.getElementById("nome").textContent = name_usr;
document.getElementById("email").textContent = email_usr;
document.getElementById("fone").textContent = telefoneFormatado;

document.getElementById("dados-coletados").style.display = "block";
document.getElementById("labels-dados-nome").style.display = "inline";
document.getElementById("labels-dados-email").style.display = "inline";
document.getElementById("labels-dados-telefone").style.display = "inline";
