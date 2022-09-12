function isLogged() {
    if(localStorage.getItem("isLogin") === "true") {
        window.location.href = 'http://127.0.0.1:5500/source/pages/TodoApp/';
    }

    if(localStorage.getItem("isRemember") === "true") {
        document.getElementsByClassName("log-in__submit-button")[0].disabled = true;
    }
}

function isNotLogged() {
    if(localStorage.getItem("isLogin") === "false") {
        window.location.href = 'http://127.0.0.1:5500/source/pages/SignIn/';
    }
}
