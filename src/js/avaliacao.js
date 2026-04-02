
document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.depoimentos');

  const cards = container.querySelector('.cards');
  const next = container.querySelector('.next');
  const prev = container.querySelector('.prev');
  const total = container.querySelectorAll('.card').length;

  let index = 0;

  next.addEventListener('click', () => {
    index = (index + 1) % total;
    cards.style.transform = 'translateX(-${index * 100}%)';
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + total) % total;
    cards.style.transform = 'translateX(-${index * 100}%)';
  });

});


const menuToggle = document.getElementById('menu-toggle');
const navBar = document.getElementById('nav-bar');

menuToggle.addEventListener('click', function() {
    // Liga/desliga a classe ativo que criamos no CSS
    menuToggle.classList.toggle('ativo');
    navBar.classList.toggle('ativo');
});
