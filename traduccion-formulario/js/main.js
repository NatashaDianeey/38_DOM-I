
function cambiarIdioma (idioma) {
	var elHead = document.getElementById('form-signin-heading');
	var elEmail = document.getElementById('inputEmail');
	var elPassword=document.getElementById('inputPassword');
	var elRemember = document.getElementById('remember');
	var elButton = document.getElementById('buttonSign');
//Español

//


	if (idioma == "es") {
		elHead.innerHTML="Por favor inicia sesion";
		elEmail.setAttribute('placeholder','Correo Electrónico');
		elPassword.setAttribute('placeholder', 'Contraseña');
		elRemember.innerHTML="Recordar datos";
		elButton.innerHTML="Iniciar Sesión";

		
	} else {
		elHead.innerHTML="Please sign in";
		elRemember.innerHTML="Remember me";
		elButton.innerHTML="Sign in";
		elPassword.setAttribute('placeholder','Password');
		elEmail.setAttribute('placeholder','Please enter your email');
	}
} 

var btnEs = document.getElementById('btnEs');
btnEs.onclick = function () {
	cambiarIdioma ("es");
}

var btnEs = document.getElementById('btnEn');
btnEn.onclick = function () {
	cambiarIdioma ("en");
}