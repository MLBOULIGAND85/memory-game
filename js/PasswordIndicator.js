function checkStrength() {
  //règle obligatoire
  const regExpPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  // au moins 6 caractères faible
  const regExpFaible = /^[A-Za-z\d@$!%*?&]{6,}$/;

  // au moins 6 caractères 1 symbole ou un nombre moyen
  const regExpMoyen = /^(?=.*\d)|(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  // au moins 6 caractères 1 symbole & 1 nombre 1 majuscule 1
  const regExpFort = regExpPassword;

  const inputPasswordValue = document.getElementById("password").value.trim();
  const strengthBar = document.getElementById("strength-bar");
  const strengthText = document.getElementById("strength-text");

  console.log("strenght-text:", strengthText);

  let strength = 0;

  // niveau faible
  if (regExpFaible.test(inputPasswordValue)) {
    strength++;
  }
  // niveau moyen
  if (regExpMoyen.test(inputPasswordValue)) {
    strength++;
  }
  // niveau fort
  if (regExpFort.test(inputPasswordValue)) {
    strength++;
  }

  switch (strength) {
    case 1:
      strengthBar.style.width = "33%";
      strengthBar.style.backgroundColor = "red";
      strengthText.style.color = "red";
      strengthText.textContent = "Niveau de sécurité : Faible";
      break;

    case 2:
      strengthBar.style.width = "66%";
      strengthBar.style.backgroundColor = "goldenrod";
      strengthText.textContent = "Niveau de sécurité : Moyen";
      strengthText.style.color = "goldenrod";
      // strengthText.style.display = "block";
      break;

    case 3:
      strengthBar.style.width = "100%";
      strengthBar.style.backgroundColor = "greenyellow";
      strengthText.style.color = "greenyellow";
      strengthText.textContent = "Niveau de sécurité : Fort";
      break;

    default:
      strengthBar.style.width = "0%";
      strengthText.textContent = "";
      break;
  }
};

  // ckeck for conditions strong

  // // au moins 1 saisie
  // if (inputPasswordValue.length >= 0) {
  //   strength++;
  // }
  // // présence de majuscule
  // if (/[A-Z]/.test(inputPasswordValue)) {
  //   strength++;
  // }
  // // présence de minuscule
  // if (/[a-z]/.test(inputPasswordValue)) {
  //   strength++;
  // }

  // // présence de chiffre
  // if (/\d/.test(inputPasswordValue)) {
  //   strength++;
  // }
  // // [\W] est équivalent à :[^a-zA-Z0-9_]
  // if (/[\W]/.test(inputPasswordValue)) {
  //   strength++;
  // }

//   switch (strength) {
//     case 1:
//       strengthBar.style.width = "20%";
//       strengthBar.style.backgroundColor = "red";
//       strengthText.textContent = "Très Faible";
//       break;
//     case 2:
//       strengthBar.style.width = "40%";
//       strengthBar.style.backgroundColor = "orange";
//       strengthText.textContent = "Faible";
//       break;
//     case 3:
//       strengthBar.style.width = "60%";
//       strengthBar.style.backgroundColor = "goldenrod";
//       strengthText.textContent = "Moyen";
//       strengthText.style.display = "block";
//       console.log("texte défini :", strengthText.textContent);
      
//       break;
//     case 4:
//       strengthBar.style.width = "80%";
//       strengthBar.style.backgroundColor = "greenyellow";
//       strengthText.textContent = "Fort";
//       break;
//     case 5:
//       strengthBar.style.width = "100%";
//       strengthBar.style.backgroundColor = "green";
//       strengthText.textContent = "Très Fort";
//       break;

//     default:
//       strengthBar.style.width = "0%";
//       strengthText.textContent = "";
//       break;
//   }
// };


// function PasswordIndicator(champPassword) {
// 	let champPasswordValue = champPassword.value.trim();
// //règle obligatoire
// const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
// // au moins 6 caractères faible
// const regExpFaible =/^[A-Za-z\d@$!%*?&]{6,}$/;

// // au moins 6 caractères 1 symbole ou un nombre moyen
// const regExpMoyen = /^(?=.*\d)|(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

// // au moins 6 caractères 1 symbole & 1 nombre 1 majuscule 1 
// const regExpFort = regExpPassword
// // if(champPassword.value.trim() === "") {
// // 	alert("pas de mot de passe");
// // 	champPassword.classList.add("error");
// // 	return false;

// }
// if(regExpFaible.test(champPassword.value.trim())) {

// };

// if(regExpMoyen.test(champPassword.value.trim()) {

// };

// if(regExpFort.test(champPassword.value.trim()) {

// };

// faire class faible trait rouge moyen orange fort vert et faire afficher 1ere barre puis 2eme barre puis 3eme barre donc ajouter la classe du niveau dans la div pour afficher les barres cote a cote horizontalement