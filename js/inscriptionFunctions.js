//FORMULAIRE inscription

// champ nom
function NameValidator(champName) {

const regExpName = /^[a-zA-Z]{3,}$/;


if(champName.value.trim() === "") {
	alert("pas de Nom");
	champName.classList.add("error");
	return false;
} else if(!regExpName.test(champName.value.trim())) {
	alert("format de Nom invalide");
	champName.classList.add("error");
	return false;
} else {
	alert("Nom ok");
	champName.classList.remove("error")
	return true;
}

};

// champ email
function EmailValidator(champEmail) {

const regExpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,}/	

if(champEmail.value.trim() === "") {
	alert("pas d'email");
	champEmail.classList.add("error");
	return false;
} else if(!regExpEmail.test(champEmail.value.trim())) {
	alert("format mail invalide");
	champEmail.classList.add("error");
	return false;
} else {
	alert("email ok");
	champEmail.classList.remove("error")
	return true;
}

};

// champ mot de passe
function PasswordValidator(champPassword) {

const regExppassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/

if(champPassword.value.trim() === "") {
	alert("pas de mot de passe");
	champPassword.classList.add("error");
	return false;
} else if(!regExppassword.test(champPassword.value.trim())) {
	alert("format du mot de passe invalide");
	champPassword.classList.add("error");
	return false;
} else {
	alert("mot de passe ok");
	champPassword.classList.remove("error")
	return true;
}

};

// champ confirmation mot de passe
function ConfirmMdpValidator(champConfirmMdp, champPassword) {

if(champConfirmMdp.value.trim() !== champPassword.value.trim()) {
	alert("les mots de passe sont différents");
	champConfirmMdp.classList.add("error");
	return false;
} else {
	alert("mot de passe ok");
	champConfirmMdp.classList.remove("error")
	return true;
}

};

// valdiation formulaire inscription
function validFormulaire(validation) {
	validation.addEventListener("click", (event) => {
	event.preventDefault();

	//verification nom
	NameValidator(inputName);

	// verification Email
	EmailValidator(inputEmail);
	alert(inputEmail);

	// verification mot de passe
	PasswordValidator(inputPassword);
	alert(inputPassword);

	//confirmation mot de passe
	ConfirmMdpValidator(inputConfirmPassword, inputPassword);
	alert(inputConfirmPassword);
	}
)};

// recuperation des emplacements
let inputName = document.getElementById("nom");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let inputConfirmPassword = document.getElementById("confirmPassword");

let validation = document.getElementById("creation");
alert(validation);

// let validation = document.getElementById("valid");
// alert(validation);

// validFormulaire(validation);
// if(!inputEmail && !inputPassword && !inputDate && !inputNumber) {
// 	alert("Merci de corriger la saisie");
// } else {

// 	let user = {
// 		email : "",
// 		password : "",
// 		date: "01/01/1901",
// 		numFetiche : 10,
// 	};
// 	user.email = inputEmail.value;
// 	user.password = inputPassword.value;
// 	user.confirmPassword = inputConfirmPassword.value;

// 	alert(user);
// 	let userJSON = JSON.stringify(user);
// 	localStorage.setItem(donnees, userJSON);
// 	alert("formulaire envoyé avec succès!");
// };

// validation.addEventListener("click", (event) => {
// 	event.preventDefault();

	// verification nom
 	NameValidator(inputName);
 	alert(inputName);

 	// verification Email
 	EmailValidator(inputEmail);
 	alert(inputEmail);

 	//  verification mot de passe
 	PasswordValidator(inputPassword);
 	alert(inputPassword);


 	//  confirm mot de passe
 	ConfirmMdpValidator(inputConfirmPassword);
 	alert(inputConfirmPassword);
//  });
