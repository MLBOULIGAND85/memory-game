
// fonctions

// Fonction de mélange "Fisher-Yates")
function melangerTableau(tableau) {
    for (let i = tableau.length - 1; i > 0; i--) {
        // Générer un index aléatoire entre 0 et i
        const j = Math.floor(Math.random() * (i + 1));
        // Échanger les éléments aux positions i et j
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
    return tableau;
}

function cardFlip() {
	// eviter de cliquer pendant l'attente
	// utilisation de l'opérateur this qui représente l'objet carte 
	if(attente || this === cart1 || this.classList.contains("matched")) {
		return;
	}
	// ajouter la class flip pour l'animation retournement
	this.classList.add("flip");

	// animation après délai = moitié du temps de transition du CSS
	setTimeout(() => {
		// afficher l'image de la carte cliquée
		this.src = cardsArrDinoName[this.getAttribute('data-id')];
	 }, 150); //moitié du temps de transition

	// test pour savoir si c'est la première carte
	if (cart1 == null) {
		cart1 = this;
	} else {
		cart2 = this;
		verifierMatch();	
	}
}

function verifierMatch() {
	if(cart1.getAttribute("data-id") === cart2.getAttribute("data-id")) {
		setTimeout(() => {
			cart1.classList.add("matched");
			cart2.classList.add("matched");
			cart1 = null;
			cart2 = null;
		}, 500);
		score ++;
		if(score === scoreMax) {
			setTimeout(() => {
				gameOver();
			}, 500);
		}
	} else {
		// desactiverClick();
		setTimeout(() => {
			restaurerJeu();
		}, 1000);
	}
	nbEssais++;
	let resultat= `${score}/${nbEssais}`;
		scoreSpan.innerText = resultat;
}

function restaurerJeu() {
	attente = true;
	// retirer la class flip avec une animation inverse
	setTimeout(() => {
		cart1.classList.remove("flip");
		cart2.classList.remove("flip");
			// animation après délai = moitié du temps de transition du CSS
			setTimeout(() => {
				// réafficher l'image du recto 0.jpg
				cart1.src = rectoCart;
				cart2.src = rectoCart;
				// remettre l'état des cartes à null
				cart1 = null;
				cart2 = null;
				attente = false;
			}, 150); //moitié du temps de transition
	}, 1000); //délai avant de commencer l'animation
	
}

function reactiverClicks() {
	// recupere de tous les elements avec la class card et exclus ceux qui ont la classe matched
    const cartes = document.querySelectorAll('.card:not(.matched)');
    cartes.forEach(carte => {
		// pour chaque carte sélectionnée on réécoute le click pour la retourner
        carte.addEventListener('click', cardFlip);
        carte.style.cursor = 'pointer';
    })
}

function gameOver() {
	const divCartes = document.querySelectorAll(".card")
	divCartes.forEach(divCarte => {
		divCarte.remove();
	});
	const finJeu = document.querySelector("#grid");
	// finJeu.classList.add("gameover-grid");
	finJeu.insertAdjacentHTML("beforeend",
	`<div class="gameover">Bravo, c'est gagné!</div>`
)};

// declaration des variables
const scoreMax = 6;
let nbEssais = 0;

// selection de la balise contenant le grid
const gridDisplay = document.getElementById("grid");
// selection de la balise span pour y afficher le score
const scoreSpan = document.getElementById("score");

// image du recto des cartes
const rectoCart = "medias/0.jpg"

//image du verso des cartes - game dino avec noms
const cardsArrDinoName = [
    "medias/1.jpg",
    "medias/2.jpg",
    "medias/3.jpg",
	"medias/4.jpg",
    "medias/5.jpg",
    "medias/6.jpg",
]

const valeursCartes = [0, 1, 2, 3, 4, 5];
const indices = [...valeursCartes, ...valeursCartes];
let cart1 = null;
let cart2 = null;
let score = 0;
let attente = false;


// //mélanger les indices du tableau aléatoirement : lancement de la fonction mélanger
	melangerTableau(indices);

//creer les cartes
    indices.forEach( i => {
		// creation de la balise img
        const img = document.createElement('img');
		//ajout de la class card
		img.classList.add('card');
		// ajout de l'image recto
		img.setAttribute('src', rectoCart);
		// ajout d'un id de valeur égale à l'indice du tableau
        img.setAttribute('data-id', i);
		// Pause d'un écouteur de click sur chaque carte créée,
		// au click lance la fonction cardFlip
		img.addEventListener('click', cardFlip);
		//attachement de la balise img à l'élément grid (déclaré dans la const gridDisplay)
        gridDisplay.appendChild(img);
  });

//  relancer le jeu
//   ecouteur évènement sur le document
document.addEventListener("keydown", (event) => {
	// si l'évenement est la barre d'espace
	if(event.code === "Space" || event.key === "") {
		event.preventDefault();
	// recharger la page
	 location.reload();
	 }
});



// Codes remplacés : utilisation des canvas

// //creation de canvas pour gérer l'affichage faces cachées ou retournées
// const canvas = document.createElement("canvas");
// canvas.width = 100;
// canvas.height = 100;
// const context = canvas.getContext("2d");
// context.fillStyle = '#daa520'; 
// context.fillRect(0, 0, canvas.width, canvas.height);


// function restaurerJeu() {
// 	// transfert le contenu du canvas vers l'élément image de la carte  : transforme une image dynamique en une image statique
// 	cart1.src = canvas.toDataURL();
// 	cart2.src = canvas.toDataURL();
// 	cart1 = null;
// 	cart2 = null;
// }


// melanger les cartes
// indices.sort(() => 0.5 - Math.random());
