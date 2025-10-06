function checkPasswordMatch(confirmPassword) {
	if (confirmPassword.value != $("#password").val()) {
		confirmPassword.setCustomValidity("Mật khẩu không khớp!")
	} else {
		confirmPassword.setCustomValidity("");
	}

}