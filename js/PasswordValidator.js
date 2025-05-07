
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

