//import './node_modules/spotlight.js/dist/spotlight.bundle.js';
//import './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// flsFunctions.isWebp();

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        var navigationBar = document.getElementById("myNavbar")
        navigationBar.classList.remove('navbar-transparent')
        navigationBar.classList.add('navbar-transparent-dark');
    } else {
        var navigationBar = document.getElementById("myNavbar")
        navigationBar.classList.remove('navbar-transparent-dark')
        navigationBar.classList.add('navbar-transparent')
    }
}

//navbārā parāda pašreizējo lapu. 
window.onload = function () {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.href === window.location.href) {
            link.setAttribute('aria-current', 'page')
        }
    })
}





