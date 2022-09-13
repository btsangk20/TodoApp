function isLogged() {
    if(localStorage.getItem("isLogin") === "true") {
        window.location.href = 'http://127.0.0.1:5500/source/pages/TodoApp/';
    }

    if(localStorage.getItem("isRemember") === "true") {
        document.getElementById('email').value = localStorage.getItem("email");
        document.getElementById('password').value = localStorage.getItem("password");
    }
}

function isNotLogged() {
    if(localStorage.getItem("isLogin") === "false") {
        window.location.href = 'http://127.0.0.1:5500/source/pages/SignIn/';
    }
}
