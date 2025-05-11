//FORMULAIRE inscription

function verifierEmailExist() {
  // verifier si localStorage non vide et si user déjà inscrit
}

// recuperation de la balise form
const formInscription = document.getElementById("formulInscription");
// recuperation de la balise bouton Annuler
const btnAnnulation = document.getElementById("annulation");

//vider les champs au chargement de la page
window.addEventListener("load", () => {
  // Réinitialiser le formulaire
  formInscription.reset();
});

// valdiation formulaire inscription pour creation du compte
// ecouter l'évènement click sur le bouton type submit "Création"
formInscription.addEventListener("submit", (event) => {
  event.preventDefault();
  // recuperation de tous les champs de la balise form et affectation à une variable
  const inputName = document.getElementById("nom");
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const inputConfirmPassword = document.getElementById("confirmPassword");
  
  //verification du nom avec la fonction NameValidator.js
  const isNameValid = NameValidator(inputName); //isNameValid =true (true est retourné par la fct vérif)
  //verification de l'email avec la fonction EmailValidator.js
  const isEmailValid = EmailValidator(inputEmail);
  //verification du mot de passe avec la fonction PasswordValidator.js
  const isPasswordValid = PasswordValidator(inputPassword);
  //verification confirmation du mot de passe avec la fonction ConfirmMdpValidator.js
  const isConfirmPasswordValid = ConfirmMdpValidator(
    inputConfirmPassword,
    inputPassword
  );
// creation d'un constructeur definissant le type de l'objet user
function UserId(nom, email, password) {
  this.nom = nom;
  this.email = email;
  this.password = password;
}

  //si tout est true, ouvrir une nouvelle page avec un message de succès et enregistrer les données dans le localStorage
  if (
    isNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  ) {

    // verification su un compte existe déjà avec cet email
    const existinglocalStorage = localStorage.getItem("identifiants");
    let existingUser = null;

    if (existinglocalStorage) {
      existingUser = JSON.parse(existinglocalStorage);
    }

    // si un utilisateur existe déjà avec le même email
    if(existingUser && existingUser.email === inputEmail.value.trim()) {
      alert("Un compte existe déjà avec cet email : " + inputEmail.value.trim() + "\nVeuillez saisir une autre adresse email ou vous connectez via le formulaire de connexion");
      inputEmail.focus;
    } else { 
    // creation de l'objet userSession avec ses identifiants
    let newUser = new UserId(
      inputName.value.trim(),
      inputEmail.value.trim(),
      inputPassword.value.trim()
    );

    console.log(newUser.nom);
    console.log(newUser.email);
    console.log(newUser.password);

    // enregistrement dans le local storage
    localStorage.setItem("identifiants", JSON.stringify(newUser));
     console.log(newUser);

    // // recuperation des données enregistrées dans le localStorage
    const userDatas = JSON.parse(localStorage.getItem("identifiants"));

    // message de validation ok - affichage du contenu des clés nom et email
    alert(`Votre compte a été enregistré avec succès!\nnom : ${userDatas.nom}\nemail: ${userDatas.email}`);
    
    // redirection vers la page se connecter
    window.location.href = "connexion.html";
  }
}

  });
    // const userIdentifiant = {
      //   nom: inputName.value,
      //   email: inputEmail.value,
      //   password: inputPassword.value,
      //   confirmMdp: inputConfirmPassword.value,
      // };
      // // enregistrement dans le local storage
      // localStorage.setItem("identifiants", JSON.stringify(userIdentifiant));
      // console.log(userIdentifiant);
      // // recuperation des données enregistrées dans le localStorage
      // const userDatas = JSON.parse(localStorage.getItem("identifiants"));
      // // message de validation ok - affichage du contenu des clés nom et email
      // alert(`Votre compte a été enregistré avec succès!\nnom : ${userDatas.nom}\nemail: ${userDatas.email}`);
      // // redirection vers la page se connecter
      // window.location.href = "connexion.html";

// });

// gestion du bouton annuler : effacer le formulaire
btnAnnulation.addEventListener("click", (event) => {
  event.preventDefault();
  //effacer tous les champs
  formInscription.reset();
  // reinitialisation strength bar mot de passe
  strength = 0;
});
