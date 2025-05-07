
function NumberValidator(champNumber) {

const regExpNumber = /^[0-9]{1,}$/;


if(champNumber.value.trim() === "") {
	alert("pas de Numero fetiche");
	champNumber.classList.add("error");
	return false;
} else if(!regExpNumber.test(champNumber.value.trim())) {
	alert("format de Numero fetiche invalide");
	champNumber.classList.add("error");
	return false;
} else {
	alert("Numero fetiche ok");
	champNumber.classList.remove("error")
	return true;
}

};
