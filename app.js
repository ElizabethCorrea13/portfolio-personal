document.addEventListener('DOMContentLoaded', function() {
    // Captura todos los enlaces del menú
    var menuLinks = document.querySelectorAll('nav a');

    // Añade un event listener a cada enlace
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Obtiene el objetivo del enlace (ej. #contact)
            var targetId = this.getAttribute('href').substring(1);

            // Obtiene la posición y altura de la sección objetivo
            var targetElement = document.getElementById(targetId);
            var targetPosition = targetElement.offsetTop;
            var targetHeight = targetElement.offsetHeight;

            // Calcula la posición final y anima el desplazamiento
            window.scrollTo({
                top: targetPosition - targetHeight,
                behavior: 'smooth'
            });
        });
    });
});