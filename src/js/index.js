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

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("bg-video");
    const heroSection = document.querySelector(".page-entrace");

    video.play().catch(function(erro) {
        console.log("O navegador bloqueou o autoplay. Esperando interação do usuário...");
        

        heroSection.addEventListener("click", function() {
            video.play();
        }, { once: true });
    });
});