const menuToggle = document.getElementById('menu-toggle');
const navBar = document.getElementById('nav-bar');

menuToggle.addEventListener('click', function() {
    // Liga/desliga a classe ativo que criamos no CSS
    menuToggle.classList.toggle('ativo');
    navBar.classList.toggle('ativo');
});

// Animação de Scroll (Reveal)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar');
        }
    });
});

const elementosEscondidos = document.querySelectorAll('.escondido');
elementosEscondidos.forEach((el) => observer.observe(el));

window.addEventListener('load', function() {
    const video = document.getElementById('bg-video');
    

    video.play().catch(function(error) {

        document.body.addEventListener('click', function() {
            video.play();
        }, { once: true }); 
    });
});