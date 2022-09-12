document.getRootNode().addEventListener("load", isLogged());

function getValidateMessageGender() {
  var genderItem = document.getElementsByName('gender');
  for(i = 0; i < genderItem.length; i++) {
    if(genderItem[i].checked)
      return "";
  }
  return "Please select your gender";
}


function getValidateMessageEmail(email) {
  if (email.trim() === "") {
    return "Email is required";
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return "Email is not valid";
  }

  return "";
}

function getValidateMessagePassword(password, isStrict = true) {
  if (password.trim() === "") {
    return "Password is required";
  }

  if (password.trim().length < 8) {
    return "Password must be at least 8 characters";
  }

  if (!isStrict) {
    return "";
  }

  if (!/\d/.test(password)) {
    return "Password must contain at least one number";
  }

  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter";
  }

  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }

  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    return "Password must contain at least one special character";
  }

  return "";
}

function getValidateMessageFullname(fullname) {
  if (fullname.trim() === "") {
    return "Fullname is required";
  }

  if (!FULLNAME_REGEX.test(fullname.trim())) {
    return "Fullname is not valid";
  }

  const words = fullname.split(" ");
  for (var i = 0; i < words.length; i++) {
    if (words[i].charAt(0) !== words[i].charAt(0).toUpperCase()) {
      return "Fullname is not valid";
    }
  }

  return "";
}

function getValidateMessageConfirmPassword(confirmPassword, password) {
  if (confirmPassword.trim() === "") {
    return "Confirm password is required";
  }

  if (confirmPassword.trim() !== password.trim()) {
    return "Password and confirm password does not match";
  }

  return "";
}

function renderErrorMessage(fullNameErrorMessage, emailErrorMessage, passwordErrorMessage, confirmPasswordErrorMessage, genderErrorMessage) {
  document.getElementsByClassName("full-name-error")[0].innerHTML = fullNameErrorMessage;
  document.getElementsByClassName("email-error")[0].innerHTML = emailErrorMessage;
  document.getElementsByClassName("password-error")[0].innerHTML = passwordErrorMessage;
  document.getElementsByClassName("confirm-password-error")[0].innerHTML = confirmPasswordErrorMessage;
  document.getElementsByClassName("gender-error")[0].innerHTML = genderErrorMessage;
}

function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const fullname = document.getElementById("fullName").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const emailError = getValidateMessageEmail(email);
  const passwordError = getValidateMessagePassword(password);
  const fullNameError = getValidateMessageFullname(fullname);
  const confirmPasswordError = getValidateMessageConfirmPassword(confirmPassword,password);
  const genderError = getValidateMessageGender();

  if (fullNameError && emailError && passwordError && confirmPasswordError && genderError) {
    renderErrorMessage(fullNameError, emailError, passwordError, confirmPasswordError, genderError);
    return false;
  }

  if (!fullNameError && emailError && passwordError && confirmPasswordError && genderError) {
    renderErrorMessage("", emailError, passwordError, confirmPasswordError, genderError);
    return false;
  }

  if (!emailError && fullNameError && passwordError && confirmPasswordError && genderError) {
    renderErrorMessage(fullNameError, "", passwordError, confirmPasswordError, genderError);
    return false;
  }

  if (!passwordError && fullNameError && emailError && confirmPasswordError && genderError) {
    renderErrorMessage(fullNameError, emailError, "", confirmPasswordError, genderError);
    return false;
  }

  if (!genderError && fullNameError && emailError && confirmPasswordError && passwordError) {
    renderErrorMessage(fullNameError, emailError, passwordError, confirmPasswordError, "");
    return false;
  }

  if (!fullNameError && !emailError && passwordError && confirmPasswordError && genderError) {
    renderErrorMessage("", "", passwordError, confirmPasswordError, genderError);
    return false;
  }

  if (!fullNameError && emailError && !passwordError && confirmPasswordError && genderError) {
    renderErrorMessage("", emailError, "", confirmPasswordError, genderError);
    return false;
  }

  if (!fullNameError && !genderError && passwordError && confirmPasswordError && emailError) {
    renderErrorMessage("", emailError, passwordError, confirmPasswordError, "");
    return false;
  }

  if (!passwordError && !emailError && fullNameError && confirmPasswordError && genderError) {
    renderErrorMessage(fullNameError, "", "", confirmPasswordError, genderError);
    return false;
  }

  if (!emailError && !genderError && passwordError && confirmPasswordError && fullNameError) {
    renderErrorMessage(fullNameError, "", passwordError, confirmPasswordError, "");
    return false;
  }

  if(!passwordError && !genderError && emailError && confirmPasswordError && fullNameError) {
    renderErrorMessage(fullNameError, emailError, "", confirmPasswordError, "");
    return false;
  }

  if (!passwordError && !confirmPasswordError && emailError && fullNameError && genderError) {
    renderErrorMessage(fullNameError, emailError, "", "", genderError);
    return false;
  }

  if (!fullNameError && !emailError && !passwordError && confirmPasswordError && genderError) {
    renderErrorMessage("", "", "", confirmPasswordError, genderError);
    return false;
  }

  if (fullNameError && !emailError && !passwordError && !confirmPasswordError && genderError) {
    renderErrorMessage(fullNameError, "", "", "", genderError);
    return false;
  }

  if (!fullNameError && !emailError && !genderError && confirmPasswordError && passwordError) {
    renderErrorMessage("", "", passwordError, confirmPasswordError, "");
    return false;
  }

  if (!fullNameError && emailError && !passwordError && confirmPasswordError && !genderError) {
    renderErrorMessage("", emailError, "", confirmPasswordError, "");
    return false;
  }

  if (!emailError && !passwordError && !genderError && confirmPasswordError && fullNameError) {
    renderErrorMessage(fullNameError, "", "", confirmPasswordError, "");
    return false;
  }

  if (!fullNameError && !passwordError && !confirmPasswordError && genderError && emailError) {
    renderErrorMessage("", emailError, "", "", genderError);
    return false;
  }

  if (!genderError && !passwordError && !confirmPasswordError && fullNameError && emailError) {
    renderErrorMessage(fullNameError, emailError, "", "", "");
    return false;
  }

  if (!fullNameError && !emailError && genderError && !confirmPasswordError && !passwordError) {
    renderErrorMessage("", "", "", "", genderError);
    return false;
  }

  if (!fullNameError && !emailError && !passwordError && confirmPasswordError && !genderError) {
    renderErrorMessage("", "", "", confirmPasswordError, "");
    return false;
  }

  if (!fullNameError && emailError && !genderError && !confirmPasswordError && !passwordError) {
    renderErrorMessage("", emailError, "", "", "");
    return false;
  }

  if(fullNameError && !emailError && !genderError && !confirmPasswordError && !passwordError) {
    renderErrorMessage(fullNameError, "", "", "", "");
    return false;
  }

  renderErrorMessage("","","","","");

  setAccountUser(fullname, email, password);

  return true;
}

function onClickSignUp() {
  if (validateForm()) {
    alert("Register success");
    window.location.href = "http://127.0.0.1:5500/source/pages/SignIn/";
  }
}

