// ===== Scroll Animation for Projects =====
const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.2});

projectCards.forEach(card => projectObserver.observe(card));

// ===== Mobile Menu Toggle =====
const mobileBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.querySelector(".nav-links");

mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
