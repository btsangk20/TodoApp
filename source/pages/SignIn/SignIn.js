document.getRootNode().addEventListener("load", isLogged());

getAccountUser();

function getValidateMessageEmail(email) {
  if (email.trim() === "") {
    return "Email is required";
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return "Email is not valid";
  }

  //check email exist
  for (var i = 0; i < listUser.length; i++) {
    if (listUser[i].email === email.trim()) {
      return "";
    }
  }

  return "Email is not exist";

}

function getValidateMessagePassword(password, email, isStrict = true) {
  if (password.trim() === "") {
    return "Password is required";
  }

  for (var i = 0; i < listUser.length; i++) {
    if (listUser[i].email === email.trim() && listUser[i].password === password.trim()) {
      return "";
    }
  }

  return "Password is not correct";

}

function renderErrorMessage(emailErrorMessage, passwordErrorMessage) {
  document.getElementsByClassName("email-error")[0].innerHTML = emailErrorMessage;
  document.getElementsByClassName("password-error")[0].innerHTML = passwordErrorMessage;
}

function validateAccount() {  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const emailError = getValidateMessageEmail(email);
  const passwordError = getValidateMessagePassword(password, email);

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

function onClickRemember() {
  isRemember = document.getElementById("remember-box_ID").checked;
  localStorage.setItem("isRemember", isRemember);
}

setTimeout (function () {
  isRemember = false;
  localStorage.setItem("isRemember", isRemember);
}, 10000);

function onClickLogin() {
  if (validateAccount()) {
    alert("Login success");
    window.location.href = "http://127.0.0.1:5500/source/pages/TodoApp/";

    onClickRemember();

    isLogin = true;
    localStorage.setItem("isLogin", isLogin);
  }
}

