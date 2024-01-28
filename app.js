/*BARRA DE NAVEGACION*/
function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
    
    var menuToggle = document.querySelector('.menu-toggle');
    menuToggle.innerHTML = (navbar.classList.contains('show')) ? '✖' : '☰';
}

function closeMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.remove('show');

    var menuToggle = document.querySelector('.menu-toggle');
    menuToggle.innerHTML = '☰';
}


/*SIGUE*/