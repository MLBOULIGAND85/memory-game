
// fonctions
function cardFlip() {
    this.src = cardsArr[this.getAttribute('data-id')];
	// test pour savoir si c'est la première carte
	if (cart1 == null) {
		cart1= this;
	} else {
		cart2= this;
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
	// transfert le contenu du canvas vers l'élément image de la carte  : transforme une image dynamique en une image statique
	cart1.src = canvas.toDataURL();
	cart2.src = canvas.toDataURL();
	cart1 = null;
	cart2 = null;
}

function reactiverClicks() {
    const cartes = document.querySelectorAll('.card:not(.matched)');
    cartes.forEach(carte => {
        carte.addEventListener('click', cardFlip);
        carte.style.cursor = 'pointer';
    })
}

function gameOver() {
	const finJeu = document.querySelector("#game");
	finJeu.insertAdjacentHTML("beforeend",
	`<div class="gameover">Bravo, c'est gagné!</div>`
)};


// declaration des variables
const scoreMax = 6;
let nbEssais = 0;

const gridDisplay = document.getElementById("grid");
const scoreSpan = document.getElementById("score");

const cardsArr = [
    'medias/1.jpg',
    'medias/2.jpg',
    'medias/3.jpg',
	'medias/4.jpg',
    'medias/5.jpg',
    'medias/6.jpg',
]

const valeursCartes = [0, 1, 2, 3, 4, 5];
let cart1 = null;
let cart2 = null;
let score = 0;
const indices = [...valeursCartes, ...valeursCartes];

//creation de canvas pour gérer l'affichage faces cachées ou retournées
const canvas = document.createElement("canvas");
canvas.width = 100;
canvas.height = 100;
const context = canvas.getContext("2d");
context.fillStyle = '#daa520'; 
context.fillRect(0, 0, canvas.width, canvas.height);

//mélanger les indices du tableau aléatoirement
indices.sort(() => 0.5 - Math.random());

//creer les cartes
    indices.forEach( i => {
        const img = document.createElement('img');
		img.classList.add('card');
		img.setAttribute('src', canvas.toDataURL());
        img.setAttribute('data-id', i);
		img.addEventListener('click', cardFlip);
        gridDisplay.appendChild(img);
		console.log(img);
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
