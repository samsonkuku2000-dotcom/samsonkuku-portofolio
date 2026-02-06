/* ===== Mobile Menu ===== */
const mobileBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.querySelector(".nav-links");

mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

/* ===== Scroll Animation ===== */
const cards = document.querySelectorAll(".cert-card");

const reveal = () => {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", reveal);
reveal();
