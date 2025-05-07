//FORMULAIRE inscription
const formInscription = document.getElementById("formulInscription");
const btnAnnulation= document.getElementById("annulation");

//vider les champs au chargement de la page
window.addEventListener("load", () => {
  // Réinitialiser le formulaire
    formInscription.reset();
});

// valdiation formulaire inscription pour creation du compte
formInscription.addEventListener("submit", (event) => {
	event.preventDefault();
	// recuperation des champs et affichage de leur valeur
	const inputName = document.getElementById("nom");
	const inputEmail = document.getElementById("email");
	const inputPassword = document.getElementById("password");
	const inputConfirmPassword = document.getElementById("confirmPassword");
	
	//verification du nom avec la fonction NameValidator.js
	NameValidator(inputName);
	//verification de l'email avec la fonction EmailValidator.js
	EmailValidator(inputEmail);
	//verification du mot de passe avec la fonction PasswordValidator.js
	PasswordValidator(inputPassword);
	//verification confirmation du mot de passe avec la fonction ConfirmMdpValidator.js
	ConfirmMdpValidator(inputConfirmPassword, inputPassword)
});

//si tout est ok ouvrir une nouvelle page avec un message de succès et enregistrer les données dans le localStorage

// gestion du bouton annuler : effacer le formulaire
btnAnnulation.addEventListener("click",(event)=> {
	event.preventDefault();
	//effacer tous les champs
	formInscription.reset();
	
});

