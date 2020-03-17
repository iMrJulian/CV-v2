var nombre = [],
	email = [],
	edad = [],
	celular = [],
	telefono = [],
	perfil = [],
	ciudad = [],
	direccion = [],
	zip = [],
	idioma = [],
	nivel = [],
	estudios = [],
	experiencia = [];

var bontonRegistar = document.querySelector("btnSubmit");

bontonRegistar.addEventListener('click', registarCV);

function registrarCV(){
	var nombre = document.querySelector("inputNombre").value,
	email = document.querySelector("inputEmail").value,
	edad = document.querySelector("inputEdad").value,
	celular = document.querySelector("inputCelular").value,
	telefono = document.querySelector("inputTelefono").value,
	perfil = document.querySelector("inputPerfil").value,
	ciudad = document.querySelector("inputCity").value,
	direccion = document.querySelector("inputireccionNombre").value,
	zip = document.querySelector("inputZip").value,
	idioma = document.querySelector("inputIdioma1").value,
	nivel = document.querySelector("inputNivel1").value,
	estudios = document.querySelector("inputEstudios").value,
	experiencia = document.querySelector("inputExperiencia").value;

	nombre.push(nombre);
	email.push(email);
	edad.push(edad);
	celular.push(celular);
	telefono.push(telefono);
	perfil.push(perfil);
	ciudad.push(ciudad);
	direccion.push(direccion);
	zip.push(zip);
	idioma.push(idioma);
	nivel.push(nivel);
	estudios.push(estudios);
	experiencia.push(experiencia);

	localStorage.setItem("nombre", JSON.stringify(nombre));
	localStorage.setItem("email", JSON.stringify(email));
	localStorage.setItem("edad", JSON.stringify(edad));
	localStorage.setItem("celular", JSON.stringify(celular));
	localStorage.setItem("telefono", JSON.stringify(telefono));
	localStorage.setItem("perfil", JSON.stringify(perfil));
	localStorage.setItem("ciudad", JSON.stringify(ciudad));
	localStorage.setItem("direccion", JSON.stringify(direccion));
	localStorage.setItem("zip", JSON.stringify(zip));
	localStorage.setItem("idioma", JSON.stringify(idioma));
	localStorage.setItem("nivel", JSON.stringify(nivel));
	localStorage.setItem("estudios", JSON.stringify(estudios));
	localStorage.setItem("experiencia", JSON.stringify(experiencia));

}