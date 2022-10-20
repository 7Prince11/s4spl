let user = document.getElementById("user");


button = document.getElementById('click');
button_login = document.getElementById('click_login');
button.addEventListener('click', function () {
    localStorage.setItem("user", user.value);
})
button_login.addEventListener('click', function () {
    localStorage.setItem("user", user.value);
})







