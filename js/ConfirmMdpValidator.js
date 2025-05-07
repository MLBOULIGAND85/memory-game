
function ConfirmMdpValidator(champConfirmPassword,champPassword) {

	if(champConfirmPassword.value.trim() === "") {
		alert("veuillez saisir votre mot de passe");
		champConfirmPassword.classList.add("error");
		return false;
	} else if(champConfirmPassword.value.trim() === champPassword.value.trim()) {
		alert("mot de passe ok");
		champPassword.classList.remove("error")
		return true;
	} else {
		alert("vérification mot de passe invalide");
		champPassword.classList.add("error");
		return false;
	}
};