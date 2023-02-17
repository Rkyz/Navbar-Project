const navbarToggle = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".header .navbar ul");

navbarToggle.addEventListener("click", () => {
  menu.classList.toggle("nav ul");
});
