document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("¡Gracias por tu mensaje! Te responderemos a la brevedad.");
  this.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeUps = document.querySelectorAll(".fade-up");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  });
  fadeUps.forEach(el => observer.observe(el));
});


