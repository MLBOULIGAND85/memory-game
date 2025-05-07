
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
