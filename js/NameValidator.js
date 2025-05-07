
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
