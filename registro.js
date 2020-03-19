var botonRegistrar = document.getElementById("btnSubmit");

botonRegistrar.addEventListener('click', registrarCV);

function registrarCV(){
	var nombre = document.getElementById("inputNombre").value,
	email = document.getElementById("inputEmail").value,
	edad = document.getElementById("inputEdad").value,
	celular = document.getElementById("inputCelular").value,
	telefono = document.getElementById("inputTelefono").value,
	perfil = document.getElementById("inputPerfil").value,
	ciudad = document.getElementById("inputCiudad").value,
	direccion = document.getElementById("inputDireccion").value,
	habilidades = document.getElementById("inputHabilidades").value,
	idioma = document.getElementById("inputIdioma1").value,
	nivel = document.getElementById("inputNivel1").value,
	idioma1 = document.getElementById("inputIdioma2").value,
	nivel1 = document.getElementById("inputNivel2").value,
	estudios = document.getElementById("inputEstudios").value,
	experiencia = document.getElementById("inputExperiencia").value;

	localStorage.setItem("nombre", JSON.stringify(nombre));
	localStorage.setItem("email", JSON.stringify(email));
	localStorage.setItem("edad", JSON.stringify(edad));
	localStorage.setItem("celular", JSON.stringify(celular));
	localStorage.setItem("telefono", JSON.stringify(telefono));
	localStorage.setItem("perfil", JSON.stringify(perfil));
	localStorage.setItem("ciudad", JSON.stringify(ciudad));
	localStorage.setItem("direccion", JSON.stringify(direccion));
	localStorage.setItem("habilidades", JSON.stringify(habilidades));
	localStorage.setItem("idioma", JSON.stringify(idioma));
	localStorage.setItem("nivel", JSON.stringify(nivel));
	localStorage.setItem("idioma1", JSON.stringify(idioma1));
	localStorage.setItem("nivel1", JSON.stringify(nivel1));
	localStorage.setItem("estudios", JSON.stringify(estudios));
	localStorage.setItem("experiencia", JSON.stringify(experiencia));
	
	location.href="Hoja-de-vida-HTML/plantilla.html";
}