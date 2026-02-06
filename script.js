/* ===== Typing Animation ===== */
const roles = ["Junior Full-Stack Developer", "IT Student", "Web Application Developer"];
let roleIndex = 0, charIndex = 0;
const typingText = document.getElementById("typingText");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typingText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 90);
  } else {
    setTimeout(eraseRole, 1500);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeRole);

/* ===== Mobile Menu Toggle ===== */
const mobileBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.querySelector(".nav-links");

mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

/* ===== Hero Scroll Animation ===== */
const heroText = document.querySelector('.hero-text');
const heroImage = document.querySelector('.hero-image');

const heroObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

heroObserver.observe(heroText);
heroObserver.observe(heroImage);
/* ===== Back to Top Functionality ===== */
const backToTopBtn = document.getElementById("backToTop");

// Show button when user scrolls down 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
