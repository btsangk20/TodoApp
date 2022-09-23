function isLogged() {
    if(localStorage.getItem("isLogin") === "true") {
        const path = window.location.href;
        const pathArray = path.split("/");
        pathArray[pathArray.length - 2] = "TodoApp";
        const newPath = pathArray.join("/");
        window.location.href = newPath;
    }

    if(localStorage.getItem("isRemember") === "true") {
        document.getElementById('email').value = localStorage.getItem("email");
        document.getElementById('password').value = localStorage.getItem("password");
    }
}

function isNotLogged() {
    if(localStorage.getItem("isLogin") === "false") {
        const path = window.location.href;
        const pathArray = path.split("/");
        pathArray[pathArray.length - 2] = "SignIn";
        const newPath = pathArray.join("/");
        window.location.href = newPath;
    }
}
