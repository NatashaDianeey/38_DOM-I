// var idioma = " ";

// if (idioma == "es") {
// 	el usuario.innerHTML="usuario";
// 	el pasport.innerHTML="Contraseña";
	
// }


function cambiarIdioma (idioma) {
	var elHead = document.getElementById('form-signin-heading');
	var elEmail = document.getElementById('inputEmail');
	var elPassword=document.getElementById('inputPassword');
	var elRemember = document.getElementById('remember');
	var elButton = document.getElementById('buttonSign');
//Español

//

	elEmail.setAttribute('placeholder','Please');
	var input_email = document.getElementById('Correo');

	elPassword.setAttribute('placeholder', 'Password');
	var input_email = document.getElementById('Constraseña');

	

	if (idioma == "es") {
		elHead.innerHTML="Por favor inicia sesion";
		elEmail.innerHTML="Correo";
		elPassword.innerHTML="Contraseña";
		elRemember.innerHTML="Recordar datos"
		elButton.innerHTML="Iniciar Sesión"

		elContra.setAttribute('placeholder','Ingresa Contraseña');
		elCorreo.setAttribute('placeholder', 'Ingresa Correo')
	} else {
		elHead.innerHTML='form-signin-heading';
		elEmail.innerHTML ='inputEmail';
		elPassword.innerHTML ='inputPassword';
		elContra.setAttribute('placeholder','inputPassword');
		elCorreo.setAttribute('placeholder','inputEmail');
	}
} 

var btnEs = document.getElementById('btnEs');
btnEs.onclick = function () {
	cambiarIdioma ("es");
}

var btnEn = document.getElementById('btnEn');
btnEn.onclick = function () {
	cambiarIdioma ("en")
}