const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const FULLNAME_REGEX = /^[a-zA-Z ]{2,40}$/;

const AccountUser = {
  email: "",
  password: "",
};

function getValidateMessageGender() {
  var genderItem = document.getElementsByName('gender');
  for(i = 0; i < genderItem.length; i++) {
    if(genderItem[i].checked)
      return "";
  }
  return "Please select your gender";
}

function getAccountUser() {
  const AccountUser = new Object();
  AccountUser.email = localStorage.getItem("email");
  AccountUser.password = localStorage.getItem("password");
  return AccountUser;
}

function setAccountUser(AccountUser) {
  localStorage.setItem("email", AccountUser.email);
  localStorage.setItem("password", AccountUser.password);
}

function getValidateMessageEmail(email) {
  if (email.trim() === "") {
    return "Email is required";
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return "Email is not valid";
  }

  //email is exist
  if (localStorage.getItem("email") === email.trim()) {
    return "Email is exist";
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

function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const fullname = document.getElementById("fullName").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let emailErrorMessage = document.getElementsByClassName("email-error")[0];
  let passwordErrorMessage =document.getElementsByClassName("password-error")[0];
  let fullNameErrorMessage =document.getElementsByClassName("full-name-error")[0];
  let confirmPasswordErrorMessage = document.getElementsByClassName("confirm-password-error")[0];
  let genderErorMessage = document.getElementsByClassName('gender-error')[0];

  const emailError = getValidateMessageEmail(email);
  const passwordError = getValidateMessagePassword(password);
  const fullNameError = getValidateMessageFullname(fullname);
  const confirmPasswordError = getValidateMessageConfirmPassword(confirmPassword,password);
  const genderError = getValidateMessageGender();

  if (fullNameError && emailError && passwordError && confirmPasswordError && genderError) {
    emailErrorMessage.innerHTML = emailError;
    passwordErrorMessage.innerHTML = passwordError;
    fullNameErrorMessage.innerHTML = fullNameError;
    confirmPasswordErrorMessage.innerHTML = confirmPasswordError;
    genderErorMessage.innerHTML = genderError;
    return false;
  }

  if (!fullNameError && emailError && passwordError && confirmPasswordError && genderError) {
    fullNameErrorMessage.innerHTML = "";
    emailErrorMessage.innerHTML = emailError;
    passwordErrorMessage.innerHTML = passwordError;
    confirmPasswordErrorMessage.innerHTML = confirmPasswordError;
    genderErorMessage.innerHTML = genderError;
    return false;
  }

  if (!emailError && fullNameError && passwordError && confirmPasswordError && genderError) {
    emailErrorMessage.innerHTML = "";
    fullNameErrorMessage.innerHTML = fullNameError;
    passwordErrorMessage.innerHTML = passwordError;
    confirmPasswordErrorMessage.innerHTML = confirmPasswordError;
    genderErorMessage.innerHTML = genderError;
    return false;
  }

  if (!passwordError && fullNameError && emailError && confirmPasswordError && genderError) {
    passwordErrorMessage.innerHTML = "";
    fullNameErrorMessage.innerHTML = fullNameError;
    emailErrorMessage.innerHTML = emailError;
    confirmPasswordErrorMessage.innerHTML = confirmPasswordError;
    genderErorMessage.innerHTML = genderError;
    return false;
  }

  if (!genderError && fullNameError && emailError && confirmPasswordError && passwordError) {
    genderErorMessage.innerHTML = "";
    fullNameErrorMessage.innerHTML = fullNameError;
    emailErrorMessage.innerHTML = emailError;
    passwordErrorMessage.innerHTML = passwordError;
    confirmPasswordErrorMessage.innerHTML = confirmPasswordError;
    return false;
  }

  if (!fullNameError && !emailError && passwordError && confirmPasswordError && genderError) {
    fullNameErrorMessage.innerHTML = "";
    emailErrorMessage.innerHTML = "";
    passwordErrorMessage.innerHTML = passwordError;
    genderErorMessage.innerHTML = genderError;
    confirmPasswordErrorMessage.innerHTML = confirmPasswordError;
    return false;
  }

  if (!fullNameError && emailError && !passwordError && confirmPasswordError && genderError) {
    fullNameErrorMessage.innerHTML = "";
    emailErrorMessage.innerHTML = emailError;
    passwordErrorMessage.innerHTML = "";
    genderErorMessage.innerHTML = genderError;
    confirmPasswordErrorMessage.innerHTML = confirmPasswordError;
    return false;
  }

  if (!fullNameError && !genderError && passwordError && confirmPasswordError && emailError) {
    fullNameErrorMessage.innerHTML = "";
    genderErorMessage.innerHTML = "";
    passwordErrorMessage.innerHTML = passwordError;
    emailErrorMessage.innerHTML = emailError;
    confirmPasswordErrorMessage.innerHTML = confirmPasswordError;
    return false;
  }

  if (!passwordError && !emailError && fullNameError && confirmPasswordError && genderError) {
    passwordErrorMessage.innerHTML = "";
    emailErrorMessage.innerHTML = "";
    fullNameErrorMessage.innerHTML = fullNameError;
    genderErorMessage.innerHTML = genderError;
    confirmPasswordErrorMessage.innerHTML = confirmPasswordError;
    return false;
  }

  if (!emailError && !genderError && passwordError && confirmPasswordError && fullNameError) {
    emailErrorMessage.innerHTML = "";
    genderErorMessage.innerHTML = "";
    passwordErrorMessage.innerHTML = passwordError;
    fullNameErrorMessage.innerHTML = fullNameError;
    confirmPasswordErrorMessage.innerHTML = confirmPasswordError;
    return false;
  }

  if(!passwordError && !genderError && emailError && confirmPasswordError && fullNameError) {
    passwordErrorMessage.innerHTML = "";
    genderErorMessage.innerHTML = "";
    emailErrorMessage.innerHTML = emailError;
    fullNameErrorMessage.innerHTML = fullNameError;
    confirmPasswordErrorMessage.innerHTML = confirmPasswordError;
    return false;
  }

  if (!passwordError && !confirmPasswordError && emailError && fullNameError && genderError) {
    passwordErrorMessage.innerHTML = "";
    confirmPasswordErrorMessage.innerHTML = "";
    emailErrorMessage.innerHTML = emailError;
    genderErorMessage.innerHTML = genderError;
    fullNameErrorMessage.innerHTML = fullNameError;
    return false;
  }

  if (!fullNameError && !emailError && !passwordError && confirmPasswordError && genderError) {
    fullNameErrorMessage.innerHTML = "";
    emailErrorMessage.innerHTML = "";
    passwordErrorMessage.innerHTML = "";
    genderErorMessage.innerHTML = genderError;
    confirmPasswordErrorMessage.innerHTML = confirmPasswordError;
    return false;
  }

  if (fullNameError && !emailError && !passwordError && !confirmPasswordError && genderError) {
    genderErorMessage.innerHTML = genderError;
    fullNameErrorMessage.innerHTML = fullNameError;
    emailErrorMessage.innerHTML = "";
    passwordErrorMessage.innerHTML = "";
    confirmPasswordErrorMessage.innerHTML = "";
    return false;
  }

  if (!fullNameError && !emailError && !genderError && confirmPasswordError && passwordError) {
    fullNameErrorMessage.innerHTML = "";
    emailErrorMessage.innerHTML = "";
    genderErorMessage.innerHTML = "";
    confirmPasswordErrorMessage.innerHTML = confirmPasswordError;
    passwordErrorMessage.innerHTML = passwordError;
    return false;
  }

  if (!emailError && !passwordError && !genderError && confirmPasswordError && fullNameError) {
    emailErrorMessage.innerHTML = "";
    passwordErrorMessage.innerHTML = "";
    genderErorMessage.innerHTML = "";
    confirmPasswordErrorMessage.innerHTML = confirmPasswordError;
    fullNameErrorMessage.innerHTML = fullNameError;
    return false;
  }

  if (!fullNameError && !passwordError && !confirmPasswordError && genderError && emailError) {
    fullNameErrorMessage.innerHTML = "";
    passwordErrorMessage.innerHTML = "";
    confirmPasswordErrorMessage.innerHTML = "";
    genderErorMessage.innerHTML = genderError;
    emailErrorMessage.innerHTML = emailError;
    return false;
  }

  if (!genderError && !passwordError && !confirmPasswordError && fullNameError && emailError) {
    genderErorMessage.innerHTML = "";
    passwordErrorMessage.innerHTML = "";
    confirmPasswordErrorMessage.innerHTML = "";
    fullNameErrorMessage.innerHTML = fullNameError;
    emailErrorMessage.innerHTML = emailError;
    return false;
  }

  if (!fullNameError && !emailError && genderError && !confirmPasswordError && !passwordError) {
    fullNameErrorMessage.innerHTML = "";
    emailErrorMessage.innerHTML = "";
    passwordErrorMessage.innerHTML = "";
    confirmPasswordErrorMessage.innerHTML = "";
    genderErorMessage.innerHTML = genderError;
    return false;
  }

  if (!fullNameError && emailError && !genderError && !confirmPasswordError && !passwordError) {
    fullNameErrorMessage.innerHTML = "";
    emailErrorMessage.innerHTML = emailError;
    passwordErrorMessage.innerHTML = "";
    confirmPasswordErrorMessage.innerHTML = "";
    genderErorMessage.innerHTML = "";
    return false;
  }

  if(fullNameError && !emailError && !genderError && !confirmPasswordError && !passwordError) {
    fullNameErrorMessage.innerHTML = fullNameError;
    emailErrorMessage.innerHTML = "";
    passwordErrorMessage.innerHTML = "";
    confirmPasswordErrorMessage.innerHTML = "";
    genderErorMessage.innerHTML = "";
    return false;
  }



  emailErrorMessage.innerHTML = "";
  passwordErrorMessage.innerHTML = "";
  fullNameErrorMessage.innerHTML = "";
  confirmPasswordErrorMessage.innerHTML = "";
  genderErorMessage.innerHTML = "";

  let storeAccount = new Object();

  storeAccount.email = email;
  storeAccount.password = password;

  setAccountUser(storeAccount);

  return true;
}
