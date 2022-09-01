const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const FULLNAME_REGEX = /^[a-zA-Z ]{2,40}$/;

const AccountUser = {
  email: "",
  password: "",
};

function getAccountUser() {
  const AccountUser = new Object();
  AccountUser.email = localStorage.getItem("email");
  AccountUser.password = localStorage.getItem("password");
  return AccountUser;
}

const AccountUserForCheck = getAccountUser();

function getValidateMessageEmail(email) {
  if (email.trim() === "") {
    return "Email is required";
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return "Email is not valid";
  }

  if (AccountUserForCheck.email !== email.trim()) {
    return "Email is not exist";
  }

  return "";
}

function getValidateMessagePassword(password, isStrict = true) {
  if (password.trim() === "") {
    return "Password is required";
  }

  if (AccountUserForCheck.password !== password.trim()) {
    return "Password is not correct";
  }

  return "";
}

function validateAccount() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let emailErrorMessage = document.getElementsByClassName("email-error")[0];
  let passwordErrorMessage = document.getElementsByClassName("password-error")[0];

  const emailError = getValidateMessageEmail(email);
  const passwordError = getValidateMessagePassword(password);

  if (emailError && passwordError) {
    emailErrorMessage.innerHTML = emailError;
    passwordErrorMessage.innerHTML = passwordError;
    return false;
  }

  if (!emailError && passwordError) {
    emailErrorMessage.innerHTML = "";
    passwordErrorMessage.innerHTML = passwordError;
    return false;
  }

  if (emailError && !passwordError) {
    emailErrorMessage.innerHTML = emailError;
    passwordErrorMessage.innerHTML = "";
    return false;
  }

  emailErrorMessage.innerHTML = "";
  passwordErrorMessage.innerHTML = "";

  return true;
}
