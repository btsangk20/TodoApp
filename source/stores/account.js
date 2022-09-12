const AccountUser = {
  fullname: "",
  email: "",
  password: "",
};

var listUser = [];

function getAccountUser() {
  listUser = JSON.parse(localStorage.getItem("listUser"));
}

function setAccountUser(_fullname, _email, _password) {
  AccountUser.fullname = _fullname;
  AccountUser.email = _email;
  AccountUser.password = _password;

  getAccountUser();

  listUser.push(AccountUser);

  localStorage.setItem("listUser", JSON.stringify(listUser));
}