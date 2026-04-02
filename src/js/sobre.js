const steps = document.querySelectorAll(".step");
const circles = document.querySelectorAll(".circle");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const screenHeight = window.innerHeight;

  const index = Math.floor(scrollY / screenHeight);

  const goingDown = scrollY > lastScroll;
  lastScroll = scrollY;

  steps.forEach((step, i) => {
    step.classList.remove("active", "prev", "next");

    if (i === index) {
      step.classList.add("active");
    } 
    
    else if (i < index) {
      step.classList.add("prev");
    } 
    
    else {
      step.classList.add("next");
    }
  });

  // Timeline
  circles.forEach(c => c.classList.remove("active"));
  if (circles[index]) circles[index].classList.add("active");
});

// Clique nas bolinhas
circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth"
    });
  });
});

const menuToggle = document.getElementById('menu-toggle');
const navBar = document.getElementById('nav-bar');

menuToggle.addEventListener('click', function() {
    // Liga/desliga a classe ativo que criamos no CSS
    menuToggle.classList.toggle('ativo');
    navBar.classList.toggle('ativo');
});