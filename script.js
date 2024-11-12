// Función para abrir el sitio web de Semantic Scholar en una nueva pestaña
function learnMore() {
    window.open("https://www.semanticscholar.org", "_blank");
  }
  
  // Asegura que el scroll esté en la parte superior al cargar la página
  window.onload = function () {
    window.scrollTo(0, 0);
  };
  
  // Cambia el fondo del navbar al hacer scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = "#1b2733";
    } else {
      navbar.style.backgroundColor = "#2c3e50";
    }
  
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    let currentSection = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  });
  