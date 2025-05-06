// fonction mélanger les cartes du jeu aléatoirement
function melangerJeu(tableau) {
  let index = tableau.length;

  // Tant qu'il reste des éléments dans le tableau
  while (index != 0) {
    //choix d'un élément restant
    let randomIndex = Math.floor(Math.random() * index);
    index--;

    // echange avec un autre élément
    [tableau[index], tableau[randomIndex]] = [
      tableau[randomIndex], tableau[index]];
  }
  return tableau;
}

// tableau cartes retournés : état initial
const jeuInit = [
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
];

let buttonId = 0;
let nbCoups = 0;

// valeurs des cartes de 1 à 6 pour un jeu de 4*3
const valeursCartes = [1,1,2,2,3,3,4,4,5,5,6,6];

// copie de valeursCartes dans le nouveau tableau jeu
const jeu=[...valeursCartes];

// melange du jeu et creation du tableau tirageJeu mélangé
let tirageJeu = melangerJeu(jeu);

console.log(jeu);
console.log(tirageJeu);

// création tableau de cartes 2D  avec le tirage
const cartesJeu = [
	[tirageJeu[0],tirageJeu[1],tirageJeu[2]],
	[tirageJeu[3],tirageJeu[4],tirageJeu[5]],
	[tirageJeu[6],tirageJeu[7],tirageJeu[8]],
	[tirageJeu[9],tirageJeu[10],tirageJeu[11]]
];

console.log(cartesJeu);

// affichage des tableaux dans la console
console.log(jeuInit);
console.log(valeursCartes);
console.log(jeu);

// affichage du tableau intial sur jouer.html
const divCartes = document.querySelector("#game")
window.addEventListener("load", (event) => {
	event.preventDefault();
	for (let i = 0; i < jeuInit.length; i++) {
		for (let j = 0; j < jeuInit[i].length; j++) {
			divCartes.insertAdjacentHTML("beforeend",
				`<button type="submit" class="carte-btn" id="bouton-${buttonId}" data-row="${i}" data-col="${j}">
					<img id="img-${buttonId}" src="medias/0.jpg" alt="carte retournée">
				</button>`
			);
			buttonId++;		
		}
	}
});

//ecouter le click sur chaque bouton
const boutons = document.querySelectorAll(".carte-btn");
boutons.forEach(bouton => {
	bouton.addEventListener("click", (event) => {
		retournerCarte(event);
	});
});

// variables début du jeu

let cartesRetournees = 0;
let carteUne = null;
let carteDeux = null;
let carteEnJeu = true;

function retournerCarte(event) {
	// si toutes les cartes ont été retournées on sort de la fonction avec return
	 // si toutes les cartes ont été retournées on sort de la fonction avec return
    if(!carteEnJeu) return;
	
	if(!event) {
		console.error("evenement manquant dans retourner carte")
		return;
	}	

	const bouton = event.currentTarget; //recupère la balise button contenant l'image du bouton cliqué
	const rangee = parseInt(bouton.getAttribute("data-row"));
	const colonne = parseInt(bouton.getAttribute("data-col"));


	// CORRECTION 3: Vérifier que les attributs data-row et data-col sont présents
    if (isNaN(rangee) || isNaN(colonne)) {
        console.error("Attributs data-row ou data-col manquants ou invalides");
        return;
    }
    
    // CORRECTION 4: Vérifier que cartesJeu existe et a les bonnes dimensions
    if (!cartesJeu || !cartesJeu[rangee] || cartesJeu[rangee][colonne] === undefined) {
        console.error("La carte n'existe pas dans le tableau cartesJeu");
        return;
    }

	// recuperation de l'image avec son id
	const idImage = bouton.querySelector("img").id;
	const image = document.getElementById(idImage);

	 // CORRECTION 5: Vérifier que image existe
    if (!image) {
        console.error("Image non trouvée");
        return;
    }
    
    // CORRECTION 6: Ajouter le chemin complet pour la vérification et l'attribution
    //empêcher de cliquer deux fois sur la meme carte
    if(image.src.includes(`medias/${cartesJeu[rangee][colonne]}.jpg`)) return;

	// changer l'image pour afficher celle correspondant à la valeur de la carte
	image.src = `medias/${cartesJeu[rangee][colonne]}.jpg`;

	//verifier les paires

	if(cartesRetournees === 0) {
		// cas de la 1ere carte
		carteUne = {
			element: bouton,
			row: rangee,
			col : colonne,
			valeur: cartesJeu[rangee][colonne]
		};
		cartesRetournees = 1;

	} else {
		// cas de la 2eme carte
		carteDeux = {
			element: bouton,
			row: rangee,
			col : colonne,
			valeur: cartesJeu[rangee][colonne]
		};
		cartesRetournees = 2;

		// CORRECTION 7: Déplacer la vérification de paire ici après avoir défini carteDeux
        verifierPaire();
	}

}
	// verifier si paire

function verifierPaire() {
	nbCoups++;

	if(carteUne.valeur === carteDeux.valeur) {
		// cas paire vrai
		alert("Bravo c'est une paire");
		carteUne = null;
		carteDeux = null;
		cartesRetournees = 0;
	} else {
		// cas paire faux
		carteEnJeu = false;
		setTimeout(() => {
			// remettre les cartes à l'etat initial
			document.getElementById(carteUne.element.querySelector("img").id).src = "medias/0.jpg"; 
			document.getElementById(carteDeux.element.querySelector("img").id).src = "medias/0.jpg";
			
			// reinitialisation des variables
			cartesRetournees = 0;
			carteUne = null;
			carteDeux = null;
			carteEnJeu = true;
		}, 1000);		
	}

}
