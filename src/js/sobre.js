const steps = document.querySelectorAll(".step");
const circles = document.querySelectorAll(".circle");

// Ativar conforme scroll
window.addEventListener("scroll", () => {
  let activeIndex = 0;

  steps.forEach((step, index) => {
    const rect = step.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2) {
      activeIndex = index;
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  circles.forEach(c => c.classList.remove("active"));
  circles[activeIndex].classList.add("active");
});

// Clique na bolinha → ir para o slide
circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    steps[index].scrollIntoView({
      behavior: "smooth"
    });
  });
});
