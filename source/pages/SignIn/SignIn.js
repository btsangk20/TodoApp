const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const FULLNAME_REGEX = /^[a-zA-Z ]{2,40}$/;

const AccountUser = {
  fullname: "",
  email: "",
  password: "",
};

function getAccountUser() {
  const AccountUser = new Object();
  AccountUser.fullname = localStorage.getItem("fullname");
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

function renderErrorMessage(emailErrorMessage, passwordErrorMessage) {
  document.getElementsByClassName("email-error")[0].innerHTML = emailErrorMessage;
  document.getElementsByClassName("password-error")[0].innerHTML = passwordErrorMessage;
}

function validateAccount() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const emailError = getValidateMessageEmail(email);
  const passwordError = getValidateMessagePassword(password);

  if (emailError && passwordError) {
    renderErrorMessage(emailError, passwordError);
    return false;
  }

  if (!emailError && passwordError) {
    renderErrorMessage("", passwordError);
    return false;
  }

  if (emailError && !passwordError) {
    renderErrorMessage(emailError, "");
    return false;
  }

  renderErrorMessage("", "");

  return true;
}

function onClickLogin() {
  if (validateAccount()) {
    alert("Login success");
    window.location.href = "http://127.0.0.1:5500/source/pages/TodoApp/";
  }
}

