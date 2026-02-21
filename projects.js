document.addEventListener("DOMContentLoaded", function() {

  // ===== Scroll Animation for Project Cards =====
  const projectCards = document.querySelectorAll(".project-card");
  const fadeElements = document.querySelectorAll(".fade-in");

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.2});

  projectCards.forEach(card => scrollObserver.observe(card));
  fadeElements.forEach(el => scrollObserver.observe(el));

  // ===== Mobile Menu Toggle =====
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    // Optional: close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // ===== Counter Animation =====
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText.replace("+","");
      const increment = target / 50;

      if (current < target) {
        counter.innerText = Math.ceil(Math.min(current + increment, target));
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });

  // ===== Back to Top Button =====
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      backToTopBtn.style.display = (window.scrollY > 300) ? "block" : "none";
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});
