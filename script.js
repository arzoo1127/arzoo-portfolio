// Typing Effect

const roles = [
  "MCA Student",
  "Web Application Developer",
  "DevOps Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.querySelector(".hero-left h2");

function typeEffect() {

  if (!roleElement) return;

  let currentRole = roles[roleIndex];

  roleElement.textContent =
    currentRole.substring(0, charIndex);

  charIndex++;

  if (charIndex > currentRole.length) {

    setTimeout(() => {

      charIndex = 0;
      roleIndex++;

      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }

    }, 1200);

  }

}

setInterval(typeEffect, 120);


// Navbar Scroll Effect

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.3)";

  } else {

    navbar.style.boxShadow = "none";

  }

});


// Scroll Reveal

const reveals = document.querySelectorAll(
  ".about-card, .skill-card, .project-card, .contact-form"
);

function revealElements() {

  reveals.forEach((item) => {

    const windowHeight = window.innerHeight;

    const elementTop =
      item.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

      item.style.opacity = "1";
      item.style.transform = "translateY(0px)";

    }

  });

}

reveals.forEach((item) => {

  item.style.opacity = "0";
  item.style.transform = "translateY(60px)";
  item.style.transition = "all .8s ease";

});

window.addEventListener(
  "scroll",
  revealElements
);

revealElements();


// Active Nav Link

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {

      link.classList.add("active");

    }

  });

});


// Button Hover Glow

const buttons =
  document.querySelectorAll(".btn");

buttons.forEach((btn) => {

  btn.addEventListener("mouseenter", () => {

    btn.style.boxShadow =
      "0 0 25px rgba(139,92,246,.7)";

  });

  btn.addEventListener("mouseleave", () => {

    btn.style.boxShadow = "none";

  });

});


// Console Signature

console.log(
  "Portfolio Developed By Arzoo 🚀"
);