const AccountUser = {
  fullname: "",
  email: "",
  password: "",
};

let listUser = [];

function getAccountUser() {
  listUser = JSON.parse(localStorage.getItem("listUser"));
}

function setAccountUser(_fullname, _email, _password) {
  let storeAccount = new Object();
  storeAccount.fullname = _fullname;
  storeAccount.email = _email;
  storeAccount.password = _password;

  listUser.push(storeAccount);
  localStorage.setItem("listUser", JSON.stringify(listUser));
}